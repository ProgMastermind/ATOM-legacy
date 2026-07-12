#!/bin/bash
set -e

# This is the only way to get aiter main onto a rocm/atom image.
# Pre-built images ship an older aiter commit that is missing the symbols
# mine/main needs (swizzle_scales, swiglu_add_residual).

echo "=== system / env setup ==="
echo 0 > /proc/sys/kernel/numa_balancing
export AITER_LOG_LEVEL=WARNING
export HF_HOME=/workspace/huggingface_cache
export GPU_ARCHS=gfx942
export PREBUILD_KERNELS=0

echo "=== build aiter from ROCm/aiter main ==="
cd /app/aiter-test

git remote -v || true
git remote set-url origin https://github.com/ROCm/aiter.git 2>/dev/null || \
    git remote add origin https://github.com/ROCm/aiter.git

git fetch origin main
git checkout -f -B main origin/main
git submodule update --init --recursive

# rebuild aiter C++ extension; the extra index is needed for flydsl/nightly deps
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
