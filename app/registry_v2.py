"""Docker Registry HTTP API V2 served from project-local storage."""

from __future__ import annotations

import json
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Request, Response

from app.audit_log import RegistryAuditStore
from app.auth import require_local_registry_auth
from app.config import Settings, get_settings
from app.local_storage import LocalRegistryStorage
from app.registry_delete import delete_manifest_v2

router = APIRouter(prefix="/v2", tags=["registry"])


def get_storage(settings: Annotated[Settings, Depends(get_settings)]) -> LocalRegistryStorage:
    return LocalRegistryStorage(settings.registry_data_dir)


def get_audit(settings: Annotated[Settings, Depends(get_settings)]) -> RegistryAuditStore:
    return RegistryAuditStore(settings.audit_log_dir)


@router.get("/")
def v2_root(_: None = Depends(require_local_registry_auth)) -> dict:
    return {}


@router.get("/_catalog")
def catalog(
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    _: None = Depends(require_local_registry_auth),
    n: int | None = None,
) -> dict:
    repos = storage.list_repositories()
    if n is not None:
        repos = repos[:n]
    return {"repositories": repos}


@router.get("/{name:path}/tags/list")
def tags_list(
    name: str,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    _: None = Depends(require_local_registry_auth),
) -> dict:
    try:
        tags = storage.list_tags(name)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    return {"name": name, "tags": tags}


@router.get("/{name:path}/manifests/{reference}")
@router.head("/{name:path}/manifests/{reference}")
async def get_manifest(
    name: str,
    reference: str,
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    audit: Annotated[RegistryAuditStore, Depends(get_audit)],
    _: None = Depends(require_local_registry_auth),
) -> Response:
    try:
        digest, data = storage.resolve_tag(name, reference)
    except FileNotFoundError as exc:
        raise HTTPException(status_code=404, detail="manifest unknown") from exc
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

    try:
        media_type = json.loads(data.decode("utf-8")).get("mediaType")
    except (json.JSONDecodeError, UnicodeDecodeError):
        media_type = "application/vnd.docker.distribution.manifest.v2+json"
    if not media_type:
        media_type = "application/vnd.docker.distribution.manifest.v2+json"

    headers = {
        "Docker-Content-Digest": digest,
        "Content-Type": media_type,
        "Docker-Distribution-Api-Version": "registry/2.0",
    }
    headers["Content-Length"] = str(len(data))
    if request.method == "HEAD":
        return Response(status_code=200, headers=headers)
    audit.record_pull(name, reference, digest)
    return Response(content=data, media_type=media_type, headers=headers)


@router.delete("/{name:path}/manifests/{reference}")
def delete_manifest(
    name: str,
    reference: str,
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    audit: Annotated[RegistryAuditStore, Depends(get_audit)],
    _: None = Depends(require_local_registry_auth),
) -> Response:
    if_match = request.headers.get("If-Match") or request.headers.get("if-match")
    result = delete_manifest_v2(storage, name, reference, if_match=if_match)
    tag = reference if not reference.startswith("sha256:") else None
    audit.record_tag_delete(
        name,
        tag=tag,
        digest=result.get("manifest_digest", ""),
        message="Manifest deleted via Registry API",
    )
    headers = {
        "Docker-Distribution-Api-Version": "registry/2.0",
    }
    return Response(status_code=202, headers=headers)


@router.delete("/{name:path}/tags/{tag}")
def delete_tag(
    name: str,
    tag: str,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    audit: Annotated[RegistryAuditStore, Depends(get_audit)],
    _: None = Depends(require_local_registry_auth),
) -> Response:
    """OCI Distribution tag delete — removes tag; blobs remain until garbage collection."""
    try:
        result = storage.remove_tag(name, tag)
    except FileNotFoundError as exc:
        raise HTTPException(status_code=404, detail="tag unknown") from exc
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    audit.record_tag_delete(
        name,
        tag=tag,
        digest=result.get("manifest_digest", ""),
        message="Tag deleted via Registry API",
    )
    headers = {"Docker-Distribution-Api-Version": "registry/2.0"}
    return Response(status_code=202, headers=headers)


@router.get("/{name:path}/blobs/{digest}")
@router.head("/{name:path}/blobs/{digest}")
async def get_blob(
    name: str,
    digest: str,
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    _: None = Depends(require_local_registry_auth),
) -> Response:
    _ = name
    if digest == "uploads" or digest.startswith("uploads/"):
        raise HTTPException(status_code=404, detail="blob unknown")
    try:
        data = storage.read_blob(digest)
    except FileNotFoundError as exc:
        raise HTTPException(status_code=404, detail="blob unknown") from exc
    headers = {
        "Docker-Content-Digest": digest,
        "Docker-Distribution-Api-Version": "registry/2.0",
    }
    headers["Content-Length"] = str(len(data))
    if request.method == "HEAD":
        return Response(status_code=200, headers=headers)
    return Response(content=data, media_type="application/octet-stream", headers=headers)
