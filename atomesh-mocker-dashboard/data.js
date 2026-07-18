window.BENCHMARK_DATA = {
  "lastUpdate": 1784405732686,
  "repoUrl": "https://github.com/ProgMastermind/ATOM-legacy",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "committer": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "id": "d54316364934f668bf87878986c341741a11afa0",
          "message": "Overlap H2D metadata copies with GPU compute on prep_stream\n\nAiterAttentionMetadataBuilder.prepare_decode was issuing all H2D\nmetadata copies (slot_mapping, context_lens, cu_seqlens_q,\nblock_tables, kv_indptr) and kv_indices_generate_triton on the\ndefault stream, serializing them with the previous step's CUDA\ngraph execution.  The AiterMLA and DeepseekV4 backends already\nuse a separate prep_stream (model_runner.async_execute_stream)\nfor these copies.\n\nAdd the same prep_stream pattern to the AiterAttention backend:\nwait for the current stream, issue copies + kv_indices generation\non prep_stream, then sync back.  This lets the small per-step H2D\ncopies overlap with GPU compute instead of blocking on the\ndefault stream, which is the dominant overhead at bs=1 decode.\n\nGenerated with [Devin](https://devin.ai)\n\nCo-Authored-By: Devin <158243242+devin-ai-integration[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-10T19:49:30Z",
          "url": "https://github.com/ProgMastermind/ATOM/commit/d54316364934f668bf87878986c341741a11afa0"
        },
        "date": 1783716114095,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2267.62,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408171 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.42,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408171 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.48,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408171 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 0.7,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408171 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408171 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 8623.95,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1552311 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 1.81,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1552311 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 3.36,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1552311 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 4.26,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1552311 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1552311 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 3759.54,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676718 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676718 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.7,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676718 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 0.81,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676718 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=676718 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 5717.49,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1029148 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.67,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1029148 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 1.12,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1029148 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.49,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1029148 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1029148 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 7426.47,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1336765 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 1.04,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1336765 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 1.9,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1336765 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 2.4,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1336765 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1336765 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2265.39,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=407770 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.42,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=407770 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.47,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=407770 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 0.66,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=407770 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=407770 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 8672.04,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1560968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 1.8,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1560968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 3.35,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1560968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 4.27,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1560968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1560968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 3779.53,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=680316 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=680316 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.7,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=680316 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 0.81,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=680316 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=680316 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 5760.32,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1036858 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.67,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1036858 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 1.1,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1036858 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 1.4,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1036858 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1036858 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 7434.89,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1338280 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 1.04,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1338280 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 1.91,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1338280 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 2.44,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1338280 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1338280 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2246.16,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=404308 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.43,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=404308 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 0.48,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=404308 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 0.59,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=404308 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=404308 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 8638.97,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1555015 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 1.81,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1555015 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 3.38,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1555015 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 4.32,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1555015 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1555015 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 3727.98,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=671037 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=671037 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.72,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=671037 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 0.92,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=671037 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=671037 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 5709.9,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1027782 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.67,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1027782 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 1.12,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1027782 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 1.44,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1027782 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1027782 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 7400.5,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1332090 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 1.04,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1332090 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 1.92,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1332090 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 2.44,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1332090 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1332090 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29118848966"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "committer": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "id": "ce6df3b44f29de38b7a870f3fd6825fb477b6546",
          "message": "Add benchmark script for gpt-oss-120b on MI300X",
          "timestamp": "2026-07-11T10:01:25Z",
          "url": "https://github.com/ProgMastermind/ATOM/commit/ce6df3b44f29de38b7a870f3fd6825fb477b6546"
        },
        "date": 1783800629734,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2823.79,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=508282 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.34,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=508282 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.43,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=508282 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 0.47,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=508282 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=508282 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 10715.53,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1928796 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 1.45,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1928796 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 2.72,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1928796 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 3.42,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1928796 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1928796 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 4644.77,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=836058 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.41,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=836058 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.58,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=836058 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 0.66,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=836058 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=836058 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 6986.92,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1257646 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.54,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1257646 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 0.89,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1257646 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.11,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1257646 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1257646 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 9016.17,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1622911 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 0.85,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1622911 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 1.58,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1622911 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 1.97,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1622911 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1622911 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2869.47,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=516505 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.33,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=516505 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.42,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=516505 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 0.47,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=516505 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=516505 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 10658.92,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1918605 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 1.46,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1918605 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 2.75,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1918605 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 3.46,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1918605 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1918605 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 4477.61,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=805970 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.42,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=805970 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.6,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=805970 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 0.68,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=805970 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=805970 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 6988.97,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1258014 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.55,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1258014 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 0.89,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1258014 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 1.1,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1258014 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1258014 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 9094.5,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1637010 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 0.84,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1637010 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 1.56,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1637010 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 1.96,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1637010 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1637010 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2855.54,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=513997 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.33,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=513997 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 0.43,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=513997 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 0.47,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=513997 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=513997 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 10799.09,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1943836 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 1.44,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1943836 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 2.71,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1943836 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 3.4,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1943836 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1943836 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 4599.94,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=827990 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.41,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=827990 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.58,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=827990 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 0.67,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=827990 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=827990 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 6840.08,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1231215 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.56,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1231215 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 0.91,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1231215 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 1.12,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1231215 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1231215 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 9193.93,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1654907 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 0.84,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1654907 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 1.54,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1654907 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 1.92,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1654907 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1654907 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29164852250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "committer": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "id": "772c8bf00fb6f0702f6391753add39d3dd25675d",
          "message": "Add start_server.sh for quick restarts without rebuilding aiter",
          "timestamp": "2026-07-12T18:13:42Z",
          "url": "https://github.com/ProgMastermind/ATOM/commit/772c8bf00fb6f0702f6391753add39d3dd25675d"
        },
        "date": 1783887176187,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2122.52,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=382054 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.45,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=382054 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.52,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=382054 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 0.58,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=382054 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=382054 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 7548.13,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1358663 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 2.07,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1358663 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 3.87,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1358663 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 4.91,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1358663 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1358663 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 3441.91,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=619543 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.56,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=619543 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.77,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=619543 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 0.89,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=619543 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=619543 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 5180.74,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=932533 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.74,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=932533 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 1.23,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=932533 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.55,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=932533 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=932533 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 6606.04,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1189088 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 1.17,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1189088 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 2.15,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1189088 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 2.74,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1189088 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1189088 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2111.86,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=380134 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.46,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=380134 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.52,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=380134 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 0.58,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=380134 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=380134 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 7495.77,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1349238 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 2.09,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1349238 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 3.89,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1349238 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 4.96,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1349238 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1349238 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 3446.88,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=620438 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.56,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=620438 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.76,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=620438 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 0.88,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=620438 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=620438 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 5239.49,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=943109 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.73,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=943109 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 1.22,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=943109 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 1.53,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=943109 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=943109 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 6633.94,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1194110 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 1.17,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1194110 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 2.14,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1194110 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 2.71,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1194110 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1194110 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2129.83,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=383369 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.45,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=383369 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 0.52,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=383369 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 0.57,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=383369 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=383369 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 7444.38,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1339988 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 2.1,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1339988 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 3.91,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1339988 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 4.98,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1339988 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1339988 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 3476.12,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=625701 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.55,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=625701 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.75,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=625701 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 0.87,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=625701 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=625701 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 5215.08,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=938714 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.74,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=938714 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 1.22,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=938714 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 1.54,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=938714 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=938714 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 6564.02,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1181523 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 1.18,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1181523 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 2.16,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1181523 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 2.75,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1181523 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1181523 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29205394877"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "committer": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "id": "772c8bf00fb6f0702f6391753add39d3dd25675d",
          "message": "Add start_server.sh for quick restarts without rebuilding aiter",
          "timestamp": "2026-07-12T18:13:42Z",
          "url": "https://github.com/ProgMastermind/ATOM/commit/772c8bf00fb6f0702f6391753add39d3dd25675d"
        },
        "date": 1783975027525,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2098.89,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=377801 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.46,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=377801 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.53,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=377801 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 0.59,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=377801 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=377801 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 7509.76,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1351757 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 2.08,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1351757 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 3.9,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1351757 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 4.99,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1351757 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1351757 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 3462.43,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=623237 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.55,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=623237 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.76,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=623237 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 0.88,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=623237 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=623237 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 5264.62,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=947631 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.73,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=947631 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 1.21,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=947631 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.52,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=947631 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=947631 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 6604,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1188720 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 1.17,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1188720 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 2.16,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1188720 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 2.74,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1188720 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1188720 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2116.86,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=381035 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.45,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=381035 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.52,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=381035 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 0.59,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=381035 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=381035 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 7242.64,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1303676 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 2.15,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1303676 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 4.12,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1303676 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 5.3,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1303676 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1303676 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 3488.71,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=627968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.55,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=627968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.75,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=627968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 0.86,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=627968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=627968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 5252.02,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=945364 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.73,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=945364 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 1.21,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=945364 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 1.53,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=945364 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=945364 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 6415.8,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1154844 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 1.21,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1154844 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 2.3,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1154844 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 3.04,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1154844 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1154844 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2109.57,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=379722 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.46,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=379722 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 0.53,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=379722 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 0.62,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=379722 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=379722 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 7636.3,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1374534 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 2.05,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1374534 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 3.83,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1374534 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 4.89,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1374534 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1374534 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 3412.98,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=614337 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.56,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=614337 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.77,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=614337 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 0.88,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=614337 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=614337 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 5250.73,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=945131 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.73,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=945131 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 1.22,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=945131 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 1.53,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=945131 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=945131 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 6694.11,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1204939 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 1.16,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1204939 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 2.12,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1204939 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 2.69,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1204939 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1204939 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29279165099"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "committer": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "id": "772c8bf00fb6f0702f6391753add39d3dd25675d",
          "message": "Add start_server.sh for quick restarts without rebuilding aiter",
          "timestamp": "2026-07-12T18:13:42Z",
          "url": "https://github.com/ProgMastermind/ATOM/commit/772c8bf00fb6f0702f6391753add39d3dd25675d"
        },
        "date": 1784061291691,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2311.61,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=416089 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.41,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=416089 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.47,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=416089 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 0.72,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=416089 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=416089 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 8039.41,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1447093 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 1.94,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1447093 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 4.25,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1447093 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 6.34,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1447093 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1447093 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 3762.22,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=677199 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=677199 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.77,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=677199 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 1.52,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=677199 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=677199 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 5626.86,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1012835 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.68,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1012835 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 1.17,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1012835 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.87,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1012835 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1012835 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 7207.35,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1297323 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 1.07,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1297323 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 2.07,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1297323 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 2.93,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1297323 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1297323 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2281.72,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410709 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.42,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410709 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.56,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410709 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 1.14,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410709 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=410709 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 7683.16,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1382968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 2.03,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1382968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 4.21,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1382968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 5.77,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1382968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1382968 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 3806.74,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=685213 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.5,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=685213 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.71,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=685213 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 0.98,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=685213 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=685213 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 4960.78,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=892940 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.77,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=892940 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 1.41,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=892940 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 2.44,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=892940 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=892940 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 6411.14,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1154005 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 1.2,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1154005 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 2.71,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1154005 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 4.17,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1154005 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1154005 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2059.43,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=370697 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.47,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=370697 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 1.07,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=370697 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 2.42,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=370697 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=370697 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 7387.39,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1329731 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 2.11,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1329731 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 4.49,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1329731 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 6.07,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1329731 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1329731 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 3361.34,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=605041 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.57,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=605041 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.9,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=605041 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 1.5,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=605041 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=605041 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 4994.08,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=898935 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.76,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=898935 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 1.56,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=898935 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 2.74,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=898935 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=898935 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 6378.91,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1148204 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 1.21,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1148204 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 2.59,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1148204 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 4,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1148204 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1148204 Run: https://github.com/ProgMastermind/ATOM/actions/runs/29362354982"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "committer": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "id": "772c8bf00fb6f0702f6391753add39d3dd25675d",
          "message": "Add start_server.sh for quick restarts without rebuilding aiter",
          "timestamp": "2026-07-12T18:13:42Z",
          "url": "https://github.com/ProgMastermind/ATOM-legacy/commit/772c8bf00fb6f0702f6391753add39d3dd25675d"
        },
        "date": 1784146965077,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2321.61,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=417889 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.41,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=417889 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.46,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=417889 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 0.56,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=417889 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=417889 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 8654.54,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1557817 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 1.8,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1557817 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 3.35,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1557817 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 4.27,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1557817 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1557817 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 3860.43,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=694878 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.49,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=694878 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.68,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=694878 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 0.79,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=694878 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=694878 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 5822.88,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1048118 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.66,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1048118 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 1.09,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1048118 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.4,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1048118 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1048118 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 7506.57,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1351183 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 1.03,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1351183 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 1.89,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1351183 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 2.39,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1351183 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1351183 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2318.79,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=417382 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.41,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=417382 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.46,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=417382 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 0.54,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=417382 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=417382 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 8564.41,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1541593 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 1.82,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1541593 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 3.42,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1541593 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 4.35,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1541593 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1541593 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 3865.52,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=695794 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.49,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=695794 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.68,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=695794 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 0.78,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=695794 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=695794 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 5816.17,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1046911 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.66,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1046911 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 1.09,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1046911 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 1.38,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1046911 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1046911 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 7298.45,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1313721 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 1.06,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1313721 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 1.94,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1313721 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 2.46,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1313721 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1313721 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2312.58,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=416265 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.41,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=416265 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 0.46,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=416265 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 0.53,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=416265 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=416265 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 8808.99,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1585618 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 1.77,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1585618 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 3.29,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1585618 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 4.17,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1585618 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1585618 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 3849.59,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=692926 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.49,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=692926 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.68,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=692926 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 0.77,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=692926 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=692926 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 5783.78,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1041081 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.66,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1041081 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 1.09,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1041081 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 1.37,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1041081 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1041081 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 7558.18,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1360473 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 1.02,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1360473 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 1.86,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1360473 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 2.37,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1360473 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1360473 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29444138318"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "committer": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "id": "772c8bf00fb6f0702f6391753add39d3dd25675d",
          "message": "Add start_server.sh for quick restarts without rebuilding aiter",
          "timestamp": "2026-07-12T18:13:42Z",
          "url": "https://github.com/ProgMastermind/ATOM-legacy/commit/772c8bf00fb6f0702f6391753add39d3dd25675d"
        },
        "date": 1784233454131,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2125.28,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=382551 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.45,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=382551 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.52,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=382551 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 0.59,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=382551 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=382551 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 7567.73,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1362192 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 2.07,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1362192 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 3.84,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1362192 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 4.9,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1362192 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1362192 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 3482.48,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=626846 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.55,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=626846 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.76,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=626846 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 0.87,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=626846 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=626846 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 5272.19,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=948994 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.73,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=948994 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 1.21,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=948994 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.53,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=948994 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=948994 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 6627.61,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1192969 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 1.17,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1192969 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 2.14,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1192969 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 2.7,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1192969 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1192969 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2141.43,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=385458 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.45,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=385458 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=385458 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 0.56,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=385458 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=385458 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 7386.47,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1329565 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 2.12,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1329565 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 3.95,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1329565 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 5.01,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1329565 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1329565 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 3482.18,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=626793 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.55,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=626793 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.75,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=626793 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 0.86,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=626793 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=626793 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 5236.03,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=942486 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.73,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=942486 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 1.22,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=942486 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 1.53,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=942486 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=942486 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 6528.86,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1175195 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 1.19,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1175195 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 2.18,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1175195 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 2.77,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1175195 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1175195 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2097.65,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=377577 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.46,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=377577 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 0.53,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=377577 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 0.59,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=377577 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=377577 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 7458.84,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1342592 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 2.1,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1342592 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 3.91,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1342592 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 5,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1342592 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1342592 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 3447.21,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=620498 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.56,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=620498 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.76,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=620498 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 0.87,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=620498 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=620498 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 5227.89,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=941021 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.73,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=941021 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 1.22,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=941021 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 1.53,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=941021 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=941021 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 6576.41,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1183754 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 1.18,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1183754 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 2.16,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1183754 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 2.74,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1183754 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1183754 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29527660608"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "committer": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "id": "772c8bf00fb6f0702f6391753add39d3dd25675d",
          "message": "Add start_server.sh for quick restarts without rebuilding aiter",
          "timestamp": "2026-07-12T18:13:42Z",
          "url": "https://github.com/ProgMastermind/ATOM-legacy/commit/772c8bf00fb6f0702f6391753add39d3dd25675d"
        },
        "date": 1784319697804,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2853.92,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=513705 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.34,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=513705 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.39,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=513705 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 0.44,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=513705 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=513705 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 9738.21,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1752877 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 1.6,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1752877 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 3,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1752877 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 3.79,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1752877 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1752877 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 4727.24,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=850904 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.41,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=850904 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.56,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=850904 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 0.64,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=850904 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=850904 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 6795.13,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1223124 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.56,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1223124 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 0.92,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1223124 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.15,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1223124 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1223124 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 8434.13,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1518144 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 0.91,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1518144 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 1.69,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1518144 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 2.12,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1518144 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1518144 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2779.07,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=500232 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.34,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=500232 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.4,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=500232 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 0.44,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=500232 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=500232 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 9709.24,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1747663 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 1.6,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1747663 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 3.01,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1747663 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 3.81,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1747663 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1747663 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 4608.81,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=829586 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.41,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=829586 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.57,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=829586 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 0.66,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=829586 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=829586 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 6664.98,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1199697 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.57,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1199697 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 0.94,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1199697 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 1.18,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1199697 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1199697 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 8458.39,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1522510 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 0.91,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1522510 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 1.68,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1522510 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 2.12,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1522510 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1522510 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2711.06,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=487990 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.35,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=487990 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 0.41,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=487990 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 0.45,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=487990 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=487990 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 9727.63,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1750973 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 1.6,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1750973 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 3,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1750973 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 3.82,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1750973 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1750973 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 4624.67,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=832441 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.41,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=832441 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.57,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=832441 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 0.65,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=832441 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=832441 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 6706.89,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1207241 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.57,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1207241 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 0.93,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1207241 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 1.17,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1207241 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1207241 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 8605.08,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1548915 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 0.9,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1548915 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 1.65,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1548915 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 2.08,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1548915 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1548915 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29607073807"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "committer": {
            "name": "ProgMastermind",
            "username": "ProgMastermind",
            "email": "surya.21mis7126@vitapstudent.ac.in"
          },
          "id": "772c8bf00fb6f0702f6391753add39d3dd25675d",
          "message": "Add start_server.sh for quick restarts without rebuilding aiter",
          "timestamp": "2026-07-12T18:13:42Z",
          "url": "https://github.com/ProgMastermind/ATOM-legacy/commit/772c8bf00fb6f0702f6391753add39d3dd25675d"
        },
        "date": 1784405731460,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 request throughput",
            "value": 2275.92,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=409666 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 avg latency",
            "value": 0.42,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=409666 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p99 latency",
            "value": 0.47,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=409666 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 p999 latency",
            "value": 0.56,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=409666 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc1 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=409666 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 request throughput",
            "value": 8530.36,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1535464 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 avg latency",
            "value": 1.83,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1535464 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p99 latency",
            "value": 3.54,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1535464 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 p999 latency",
            "value": 4.72,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1535464 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc16 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1535464 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 request throughput",
            "value": 3787.14,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=681686 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 avg latency",
            "value": 0.5,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=681686 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p99 latency",
            "value": 0.69,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=681686 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 p999 latency",
            "value": 0.79,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=681686 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc2 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=681686 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 request throughput",
            "value": 5693.64,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1024856 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 avg latency",
            "value": 0.67,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1024856 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p99 latency",
            "value": 1.11,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1024856 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 p999 latency",
            "value": 1.41,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1024856 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc4 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1024856 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 request throughput",
            "value": 7310.01,
            "unit": "req/s",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1315801 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 avg latency",
            "value": 1.06,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1315801 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p99 latency",
            "value": 1.95,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1315801 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 p999 latency",
            "value": 2.49,
            "unit": "ms",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1315801 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-1p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-1p1d-conc8 router=pd policy=round_robin workers=2 prefill=1 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1315801 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 request throughput",
            "value": 2221.69,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=399904 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 avg latency",
            "value": 0.43,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=399904 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p99 latency",
            "value": 0.63,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=399904 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 p999 latency",
            "value": 1.81,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=399904 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc1 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=399904 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 request throughput",
            "value": 8674.96,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1561492 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 avg latency",
            "value": 1.8,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1561492 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p99 latency",
            "value": 3.36,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1561492 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 p999 latency",
            "value": 4.3,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1561492 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc16 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1561492 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 request throughput",
            "value": 3739.66,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673139 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 avg latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673139 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p99 latency",
            "value": 0.74,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673139 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 p999 latency",
            "value": 1.35,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673139 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc2 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673139 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 request throughput",
            "value": 5556.18,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1000112 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 avg latency",
            "value": 0.69,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1000112 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p99 latency",
            "value": 1.2,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1000112 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 p999 latency",
            "value": 1.84,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1000112 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc4 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1000112 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 request throughput",
            "value": 7409.43,
            "unit": "req/s",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1333698 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 avg latency",
            "value": 1.04,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1333698 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p99 latency",
            "value": 1.92,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1333698 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 p999 latency",
            "value": 2.44,
            "unit": "ms",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1333698 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-2p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-2p1d-conc8 router=pd policy=round_robin workers=3 prefill=2 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1333698 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 request throughput",
            "value": 2270.87,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408756 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 avg latency",
            "value": 0.42,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408756 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p99 latency",
            "value": 0.47,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408756 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 p999 latency",
            "value": 0.53,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408756 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc1 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc1 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=1 duration_seconds=180 request_number=408756 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 request throughput",
            "value": 8559.01,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1540621 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 avg latency",
            "value": 1.82,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1540621 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p99 latency",
            "value": 3.39,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1540621 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 p999 latency",
            "value": 4.3,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1540621 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc16 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc16 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=16 duration_seconds=180 request_number=1540621 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 request throughput",
            "value": 3743.35,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673803 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 avg latency",
            "value": 0.51,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673803 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p99 latency",
            "value": 0.7,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673803 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 p999 latency",
            "value": 0.8,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673803 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc2 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc2 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=2 duration_seconds=180 request_number=673803 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 request throughput",
            "value": 5672.94,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1021129 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 avg latency",
            "value": 0.67,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1021129 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p99 latency",
            "value": 1.13,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1021129 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 p999 latency",
            "value": 1.49,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1021129 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc4 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc4 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=4 duration_seconds=180 request_number=1021129 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 request throughput",
            "value": 7385.6,
            "unit": "req/s",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1329408 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 avg latency",
            "value": 1.05,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1329408 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p99 latency",
            "value": 1.92,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1329408 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 p999 latency",
            "value": 2.44,
            "unit": "ms",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1329408 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          },
          {
            "name": "Atomesh-Mocker::pd-chat-3p1d-conc8 failed requests",
            "value": 0,
            "unit": "count",
            "extra": "cell=pd-chat-3p1d-conc8 router=pd policy=round_robin workers=4 prefill=3 decode=1 producers=1 consumers=8 duration_seconds=180 request_number=1329408 Run: https://github.com/ProgMastermind/ATOM-legacy/actions/runs/29657353318"
          }
        ]
      }
    ]
  }
}