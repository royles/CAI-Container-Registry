"""Docker Registry HTTP API V2 served from project-local storage."""

from __future__ import annotations

import json
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Request, Response

from app.auth import require_local_registry_auth
from app.config import Settings, get_settings
from app.local_storage import LocalRegistryStorage

router = APIRouter(prefix="/v2", tags=["registry"])


def get_storage(settings: Annotated[Settings, Depends(get_settings)]) -> LocalRegistryStorage:
    return LocalRegistryStorage(settings.registry_data_dir)


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
    return Response(content=data, media_type=media_type, headers=headers)


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
