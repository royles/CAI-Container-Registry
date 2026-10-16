"""Cloudera AI Application entrypoint — binds the private registry to CDSW_APP_PORT."""

import os

import uvicorn


def main() -> None:
    port = int(os.environ.get("CDSW_APP_PORT", os.environ.get("CDSW_READONLY_PORT", "8090")))
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=port,
        log_level=os.environ.get("LOG_LEVEL", "info").lower(),
    )


if __name__ == "__main__":
    main()
