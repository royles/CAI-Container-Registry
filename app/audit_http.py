"""Map HTTP errors to registry audit failure events."""

from __future__ import annotations

import re
from typing import Any

from fastapi import HTTPException, Request

from app.audit_log import AuditAction, RegistryAuditStore
from app.config import get_settings

_V2_PREFIX = "/v2/"
_MANIFEST_RE = re.compile(
    r"^/v2/(?P<repo>.+?)/manifests/(?P<reference>[^/]+)/?$"
)
_UI_REPO_POST_RE = re.compile(r"^/ui/repositories/?$")
_UI_REPO_SUB_RE = re.compile(
    r"^/ui/repositories/(?P<repo>.+?)/(?P<op>rename|delete)/?$"
)
_API_REPO_POST_RE = re.compile(r"^/api/v1/repositories/?$")
_API_REPO_SUB_RE = re.compile(
    r"^/api/v1/repositories/(?P<repo>.+?)/(?P<op>rename|delete)/?$"
)
_API_REPO_DEL_RE = re.compile(r"^/api/v1/repositories/(?P<repo>.+?)/?$")
_UI_REPLICATE_RE = re.compile(r"^/ui/replicate/?$")
_API_IMPORT_RE = re.compile(r"^/api/v1/import/?$")


def _detail_text(detail: Any) -> str:
    if detail is None:
        return "Request failed"
    if isinstance(detail, str):
        return detail
    return str(detail)


def _parse_v2_repository(path: str) -> tuple[str | None, str | None]:
    manifest = _MANIFEST_RE.match(path)
    if manifest:
        return manifest.group("repo"), manifest.group("reference")
    if not path.startswith(_V2_PREFIX):
        return None, None
    rest = path[len(_V2_PREFIX) :].strip("/")
    if not rest:
        return None, None
    for marker in ("/manifests/", "/blobs/"):
        if marker in rest:
            repo, tail = rest.split(marker, 1)
            ref = tail.split("/")[0] if marker == "/manifests/" else None
            return repo, ref
    return rest.split("/")[0] if rest else None, None


def _admin_mutation_action(path: str, method: str) -> tuple[AuditAction, str | None] | None:
    if _UI_REPO_POST_RE.match(path) or _API_REPO_POST_RE.match(path):
        return "repo_create", None
    m = _UI_REPO_SUB_RE.match(path) or _API_REPO_SUB_RE.match(path)
    if m:
        op = m.group("op")
        return ("rename" if op == "rename" else "repo_delete"), m.group("repo")
    if method == "DELETE" and _API_REPO_DEL_RE.match(path):
        return "repo_delete", _API_REPO_DEL_RE.match(path).group("repo")
    if _UI_REPLICATE_RE.match(path) or _API_IMPORT_RE.match(path):
        return "replicate", None
    return None


def record_http_failure_audit(request: Request, exc: HTTPException) -> None:
    if exc.status_code < 400:
        return
    settings = get_settings()
    audit = RegistryAuditStore(settings.audit_log_dir)
    path = request.url.path
    method = request.method.upper()
    detail = _detail_text(exc.detail)
    message = f"{method} {path} → HTTP {exc.status_code}: {detail}"

    if exc.status_code == 401:
        scope = "registry" if path.startswith(_V2_PREFIX) else "admin"
        audit.record_auth_failure(scope, path=path, method=method, message=message)
        return

    if exc.status_code == 403:
        audit.record_auth_failure("forbidden", path=path, method=method, message=message)
        return

    if path.startswith(_V2_PREFIX):
        repo, reference = _parse_v2_repository(path)
        if method in ("POST", "PUT", "PATCH"):
            audit.record_operation_failure(
                "push",
                repository=repo,
                tag=reference if reference and not reference.startswith("sha256:") else None,
                message=message,
            )
            return
        if method in ("GET", "HEAD") and "/manifests/" in path:
            if reference and not reference.startswith("sha256:"):
                audit.record_operation_failure(
                    "pull",
                    repository=repo,
                    tag=reference,
                    message=message,
                )
            elif repo:
                audit.record_operation_failure(
                    "pull",
                    repository=repo,
                    tag=reference,
                    message=message,
                )
            return

    mutation = _admin_mutation_action(path, method)
    if mutation and exc.status_code >= 400:
        action, repo = mutation
        audit.record_operation_failure(
            action,
            repository=repo,
            message=message,
        )
