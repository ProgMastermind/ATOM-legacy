#!/usr/bin/env python3
"""Tune aiter Triton moe_gemm_a16w4 kernel for small M (single-stream decode).

This script patches aiter's hardcoded get_kernel_config for the block_m==16
branch used by gpt-oss-120b decode. It is meant to be run on the ROCm pod
where /app/aiter-test is the aiter source checkout.

Changes:
- num_warps 4 -> 8
- block_k  256 -> 128
- num_stages 1 -> 2
- allow block_n to reduce to 16 (was stopping at 32)
"""
import os
import shutil
import aiter

AITER_ROOT = os.path.dirname(aiter.__file__)
SOURCE = os.path.join(AITER_ROOT, "ops/triton/moe/moe_op_gemm_a16w4.py")
BACKUP = SOURCE + ".orig"


def patch():
    if not os.path.exists(SOURCE):
        print(f"ERROR: source not found: {SOURCE}")
        return

    if not os.path.exists(BACKUP):
        shutil.copy2(SOURCE, BACKUP)
        print(f"Backed up {SOURCE} -> {BACKUP}")

    with open(SOURCE, "r") as f:
        content = f.read()

    old_block = """    if block_m == 16:
        block_n = 128
        num_warps = 4

        grid_m = routing_data.n_blocks(m, block_m)
        grid_n = triton.cdiv(n, block_n)
        grid = grid_m * grid_n * split_k
        while block_n >= 64 and grid < 256:
            block_n = block_n // 2
            grid_m = routing_data.n_blocks(m, block_m)
            grid_n = triton.cdiv(n, block_n)
            grid = grid_m * grid_n * split_k"""

    new_block = """    if block_m == 16:
        block_n = 128
        num_warps = 8
        block_k = 128
        num_stages = 2

        grid_m = routing_data.n_blocks(m, block_m)
        grid_n = triton.cdiv(n, block_n)
        grid = grid_m * grid_n * split_k
        while block_n >= 32 and grid < 256:
            block_n = block_n // 2
            grid_m = routing_data.n_blocks(m, block_m)
            grid_n = triton.cdiv(n, block_n)
            grid = grid_m * grid_n * split_k"""

    if old_block not in content:
        if new_block in content:
            print("Already patched.")
        else:
            print("ERROR: could not find the original block_m==16 branch to patch.")
        return

    content = content.replace(old_block, new_block)
    with open(SOURCE, "w") as f:
        f.write(content)
    print("Patched get_kernel_config for block_m==16")

    cache_dir = os.path.expanduser("~/.triton/cache")
    if os.path.exists(cache_dir):
        shutil.rmtree(cache_dir)
        print(f"Cleared {cache_dir}")

    aiter_cache = os.path.expanduser("~/.cache/aiter")
    if os.path.exists(aiter_cache):
        shutil.rmtree(aiter_cache)
        print(f"Cleared {aiter_cache}")

    print("\nNext: restart ATOM server and run benchmark_gptoss.py")


def revert():
    if not os.path.exists(BACKUP):
        print(f"ERROR: backup not found: {BACKUP}")
        return
    shutil.copy2(BACKUP, SOURCE)
    print(f"Reverted {SOURCE}")

    cache_dir = os.path.expanduser("~/.triton/cache")
    if os.path.exists(cache_dir):
        shutil.rmtree(cache_dir)
        print(f"Cleared {cache_dir}")

    aiter_cache = os.path.expanduser("~/.cache/aiter")
    if os.path.exists(aiter_cache):
        shutil.rmtree(aiter_cache)
        print(f"Cleared {aiter_cache}")


if __name__ == "__main__":
    import sys

    if len(sys.argv) > 1 and sys.argv[1] == "--revert":
        revert()
    else:
        patch()
