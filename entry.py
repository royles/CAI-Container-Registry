"""Cloudera AI Application entrypoint — binds the private registry to CDSW_APP_PORT."""

from __future__ import annotations

import os
import subprocess
import sys
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


def main() -> None:
    port = int(os.environ["CDSW_APP_PORT"])
    uvicorn.run(
        "app.main:app",
        host="127.0.0.1",
        port=port,
        log_level=os.environ.get("LOG_LEVEL", "info").lower(),
    )


if __name__ == "__main__":
    main()
