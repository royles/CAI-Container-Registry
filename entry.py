"""Cloudera AI Application entrypoint — binds the private registry to CDSW_APP_PORT."""

from __future__ import annotations

import asyncio
import os
import subprocess
import sys
import threading
from pathlib import Path


def _ensure_dependencies() -> None:
    try:
        import uvicorn  # noqa: F401
    except ModuleNotFoundError:
        requirements = Path(__file__).resolve().parent / "requirements.txt"
        subprocess.check_call(
            [sys.executable, "-m", "pip", "install", "--no-cache-dir", "-r", str(requirements)]
        )


_ensure_dependencies()

import uvicorn  # noqa: E402  — installed above when missing from the engine image


async def _serve_async() -> None:
    port = int(os.environ["CDSW_APP_PORT"])
    config = uvicorn.Config(
        "app.main:app",
        host="127.0.0.1",
        port=port,
        log_level=os.environ.get("LOG_LEVEL", "info").lower(),
        proxy_headers=True,
        forwarded_allow_ips="*",
    )
    server = uvicorn.Server(config)
    await server.serve()


def _serve_blocking() -> None:
    asyncio.run(_serve_async())


def main() -> None:
    try:
        asyncio.get_running_loop()
        has_loop = True
    except RuntimeError:
        has_loop = False

    if not has_loop:
        _serve_blocking()
        return

    # Notebook / embedded runners already have an event loop (e.g. Cell In[...]).
    thread = threading.Thread(target=_serve_blocking, name="cai-registry-uvicorn", daemon=False)
    thread.start()
    thread.join()


if __name__ == "__main__":
    main()
