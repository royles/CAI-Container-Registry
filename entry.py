"""Cloudera AI Application entrypoint — binds the private registry to CDSW_APP_PORT."""

import os

import uvicorn


def main() -> None:
    port = int(os.environ["CDSW_APP_PORT"]) if os.environ.get("CDSW_APP_PORT") else 8090
    uvicorn.run(
        "app.main:app",
        host="127.0.0.1",
        port=port,
        log_level=os.environ.get("LOG_LEVEL", "info").lower(),
    )


if __name__ == "__main__":
    main()
