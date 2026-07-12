#!/bin/bash
set -e

# Start the ATOM server for gpt-oss-120b on MI300X.
# Use this after scripts/setup_aiter.sh has built aiter once.
# It clears only ATOM caches (keeps Triton cache for the MoE kernel) and starts the server.

echo "=== clear ATOM caches ==="
rm -rf ~/.cache/atom/* ~/.cache/aiter/*

echo "=== start server ==="
export AITER_LOG_LEVEL=WARNING
export HF_HOME=/workspace/huggingface_cache
export HSA_NO_SCRATCH_RECLAIM=1
export NCCL_P2P_DISABLE=1
export ATOM_USE_TRITON_MOE=1

python -m atom.entrypoints.openai_server \
  --model openai/gpt-oss-120b \
  --kv_cache_dtype fp8 \
  --gpu-memory-utilization 0.5 \
  --host 0.0.0.0 \
  --server-port 8000 \
  "$@"
