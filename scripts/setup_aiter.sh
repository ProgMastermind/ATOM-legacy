#!/bin/bash
set -e

# This is the only way to get aiter main onto a rocm/atom image.
# Pre-built images ship an older aiter commit that is missing the symbols
# mine/main needs (swizzle_scales, swiglu_add_residual).

echo "=== system / env setup ==="
# /proc/sys may be read-only in the pod; the NUMA-balancing warning is non-fatal
echo 0 > /proc/sys/kernel/numa_balancing 2>/dev/null || echo "WARN: cannot disable NUMA balancing (read-only /proc/sys)"
export AITER_LOG_LEVEL=WARNING
export HF_HOME=/workspace/huggingface_cache
export GPU_ARCHS=gfx942
export PREBUILD_KERNELS=0
export HSA_NO_SCRATCH_RECLAIM=1
export NCCL_P2P_DISABLE=1

# persist in .bashrc so future terminals also have them
grep -q "HSA_NO_SCRATCH_RECLAIM" ~/.bashrc 2>/dev/null || echo 'export HSA_NO_SCRATCH_RECLAIM=1' >> ~/.bashrc
grep -q "NCCL_P2P_DISABLE" ~/.bashrc 2>/dev/null || echo 'export NCCL_P2P_DISABLE=1' >> ~/.bashrc

echo "=== build aiter from ROCm/aiter main ==="
cd /app/aiter-test

git remote -v || true
git remote set-url origin https://github.com/ROCm/aiter.git 2>/dev/null || \
    git remote add origin https://github.com/ROCm/aiter.git

git fetch origin --tags
git checkout -f -B aiter_v0163 v0.1.16.post3
git submodule update --init --recursive

echo "=== remove old aiter/flydsl packages that block reinstall ==="
SITE=$(python -c "import site; print(site.getsitepackages()[0])")
pip uninstall amd-aiter -y 2>/dev/null || true
rm -rf "${SITE}"/amd_aiter* "${SITE}"/aiter*egg* "${SITE}"/flydsl* 2>/dev/null || true

# rebuild aiter C++ extension; the extra index is needed for flydsl/nightly deps
echo "=== install aiter editable from /app/aiter-test ==="
pip install -e . --no-build-isolation \
    --extra-index-url https://rocm.frameworks-devreleases.amd.com/whl-staging/gfx942-gfx950/

echo "=== verify aiter has swizzle_scales ==="
python -c "from aiter.ops.triton.moe.moe_op_gemm_a16w4 import swizzle_scales; print('OK a16w4 swizzle_scales')"

echo "=== patch aiter moe_gemm_a16w4 get_kernel_config ==="
cd /app/ATOM
python scripts/tune_aiter_moe_a16w4.py

echo "=== clear caches ==="
rm -rf ~/.cache/atom/* ~/.cache/aiter/* ~/.triton/cache

echo "=== start server ==="
export ATOM_USE_TRITON_MOE=1
python -m atom.entrypoints.openai_server \
  --model openai/gpt-oss-120b \
  --kv_cache_dtype fp8 \
  --gpu-memory-utilization 0.5 \
  --host 0.0.0.0 \
  --server-port 8000
