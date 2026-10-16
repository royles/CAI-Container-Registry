"""Browser UI for replicating remote registries into the local CAI registry."""

from __future__ import annotations

import secrets
import uuid
from typing import Annotated

from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException, Request
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel, Field

from app.config import Settings, get_settings
from app.importer import ImageImporter, ImportJob
from app.local_storage import LocalRegistryStorage
from app.remote_client import RemoteRegistryAuth

templates = Jinja2Templates(directory="app/templates")
router = APIRouter(tags=["ui"])


class UIReplicateRequest(BaseModel):
    source: str
    target_repo: str | None = None
    target_tag: str | None = None
    replicate_all_tags: bool = False
    remote_username: str | None = None
    remote_password: str | None = None
    remote_token: str | None = None
    app_api_key: str | None = None


def get_storage(settings: Annotated[Settings, Depends(get_settings)]) -> LocalRegistryStorage:
    return LocalRegistryStorage(settings.registry_data_dir)


def get_importer(settings: Annotated[Settings, Depends(get_settings)]) -> ImageImporter:
    return ImageImporter(settings)


def _verify_ui_admin(body: UIReplicateRequest, settings: Settings) -> None:
    if not settings.app_api_key:
        return
    provided = body.app_api_key or ""
    if not secrets.compare_digest(provided, settings.app_api_key):
        raise HTTPException(status_code=401, detail="Invalid admin API key")


def _run_replicate(importer: ImageImporter, job_id: str, body: UIReplicateRequest) -> None:
    auth = RemoteRegistryAuth(
        username=body.remote_username,
        password=body.remote_password,
        token=body.remote_token,
    )
    importer.replicate(
        body.source,
        body.target_repo or "",
        target_tag=body.target_tag,
        replicate_all_tags=body.replicate_all_tags,
        remote_auth=auth,
        job_id=job_id,
    )


def _render_manage_ui(
    request: Request,
    storage: LocalRegistryStorage,
    importer: ImageImporter,
    settings: Settings,
) -> HTMLResponse:
    repos = []
    for name in storage.list_repositories():
        repos.append({"name": name, "tags": storage.list_tags(name)})
    jobs = importer.jobs.list_jobs()[:20]
    base = str(request.base_url).rstrip("/")
    registry_host = settings.public_registry_host or request.url.netloc
    example_repo = repos[0]["name"] if repos else "my-team/my-image"
    example_tag = repos[0]["tags"][0] if repos and repos[0]["tags"] else "latest"
    return templates.TemplateResponse(
        request,
        "manage.html",
        {
            "repositories": repos,
            "jobs": jobs,
            "data_dir": str(settings.registry_data_dir),
            "app_api_key_required": bool(settings.app_api_key),
            "app_root_url": f"{base}/",
            "registry_v2_url": f"{base}/v2/",
            "catalog_url": f"{base}/v2/_catalog",
            "health_url": f"{base}/health",
            "management_api_url": f"{base}/api/v1/",
            "registry_host": registry_host,
            "local_auth_enabled": settings.local_auth_enabled,
            "local_registry_username": settings.local_registry_username,
            "example_manifest_url": f"{base}/v2/{example_repo}/manifests/{example_tag}",
            "example_image_ref": f"{registry_host}/{example_repo}:{example_tag}",
        },
    )


@router.get("/", response_class=HTMLResponse)
@router.get("/ui", response_class=HTMLResponse)
def manage_ui(
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    importer: Annotated[ImageImporter, Depends(get_importer)],
    settings: Annotated[Settings, Depends(get_settings)],
) -> HTMLResponse:
    return _render_manage_ui(request, storage, importer, settings)


@router.post("/ui/replicate")
def ui_replicate(
    body: UIReplicateRequest,
    background: BackgroundTasks,
    importer: Annotated[ImageImporter, Depends(get_importer)],
    settings: Annotated[Settings, Depends(get_settings)],
) -> dict:
    _verify_ui_admin(body, settings)
    job_id = str(uuid.uuid4())
    placeholder = ImportJob(
        id=job_id,
        source=body.source,
        target_repo=body.target_repo or "(auto)",
        target_tag="*" if body.replicate_all_tags else (body.target_tag or "(auto)"),
        status="queued",
    )
    importer.jobs.save(placeholder)
    background.add_task(_run_replicate, importer, job_id, body)
    return {"job_id": job_id, "status": "queued"}


@router.get("/ui/jobs/{job_id}")
def ui_job_status(
    job_id: str,
    importer: Annotated[ImageImporter, Depends(get_importer)],
) -> dict:
    job = importer.jobs.load(job_id)
    if not job:
        raise HTTPException(status_code=404, detail="job not found")
    return {"job": job.to_dict()}


@router.get("/repos/{repository:path}/tags/{tag}", response_class=HTMLResponse)
def repo_tag_detail(
    repository: str,
    tag: str,
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    settings: Annotated[Settings, Depends(get_settings)],
) -> HTMLResponse:
    try:
        detail = storage.describe_image(repository, tag)
    except FileNotFoundError as exc:
        raise HTTPException(
            status_code=404,
            detail=(
                f"Image {repository}:{tag} not found in local storage. "
                "Use /v2/ for the registry API after replication completes."
            ),
        ) from exc
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

    base = str(request.base_url).rstrip("/")
    registry_host = settings.public_registry_host or request.url.netloc
    return templates.TemplateResponse(
        request,
        "repo_detail.html",
        {
            "repository": repository,
            "tag": tag,
            "detail": detail,
            "data_dir": str(settings.registry_data_dir),
            "manifest_url": f"{base}/v2/{repository}/manifests/{tag}",
            "tags_list_url": f"{base}/v2/{repository}/tags/list",
            "image_ref": f"{registry_host}/{repository}:{tag}",
            "runtime_catalog_ref": f"{registry_host}/{repository}:{tag}",
            "registry_host": registry_host,
        },
    )


_RESERVED_ROOT_SEGMENTS = frozenset(
    {
        "api",
        "v2",
        "ui",
        "health",
        "repos",
        "docs",
        "redoc",
        "openapi.json",
        "favicon.ico",
    }
)


@router.get("/{image_ref}")
def image_ref_shortcut(image_ref: str) -> RedirectResponse:
    """
    Convenience redirect: /local-repo:v1 → /repos/local-repo/tags/v1
    (OCI images are served under /v2/, not as HTML at the repo:tag path.)
    """
    if image_ref in _RESERVED_ROOT_SEGMENTS or "/" in image_ref or ":" not in image_ref:
        raise HTTPException(status_code=404, detail="Not Found")
    repository, tag = image_ref.rsplit(":", 1)
    if not repository or not tag:
        raise HTTPException(status_code=404, detail="Not Found")
    return RedirectResponse(url=f"/repos/{repository}/tags/{tag}", status_code=302)
