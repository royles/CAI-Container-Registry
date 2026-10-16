"""Build externally reachable URLs behind Cloudera AI reverse proxies."""

from __future__ import annotations

from fastapi import Request


def external_base_url(request: Request) -> str:
    """
    Prefer X-Forwarded-* from the ingress so docker push Location headers
    point at https://<app-subdomain>.<domain>, not http://127.0.0.1:CDSW_APP_PORT.
    """
    forwarded_proto = request.headers.get("x-forwarded-proto")
    forwarded_host = request.headers.get("x-forwarded-host") or request.headers.get("host")
    if forwarded_host:
        scheme = (forwarded_proto or request.url.scheme or "https").split(",")[0].strip()
        host = forwarded_host.split(",")[0].strip()
        return f"{scheme}://{host}".rstrip("/")
    return str(request.base_url).rstrip("/")
