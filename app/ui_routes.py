"""Browser UI for replicating remote registries into the local CAI registry."""

from __future__ import annotations

import secrets
import uuid
from typing import Annotated

from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException, Request
from fastapi.responses import HTMLResponse
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


@router.get("/ui", response_class=HTMLResponse)
def manage_ui(
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    importer: Annotated[ImageImporter, Depends(get_importer)],
    settings: Annotated[Settings, Depends(get_settings)],
) -> HTMLResponse:
    repos = []
    for name in storage.list_repositories():
        repos.append({"name": name, "tags": storage.list_tags(name)})
    jobs = importer.jobs.list_jobs()[:20]
    return templates.TemplateResponse(
        request,
        "manage.html",
        {
            "repositories": repos,
            "jobs": jobs,
            "data_dir": str(settings.registry_data_dir),
            "app_api_key_required": bool(settings.app_api_key),
        },
    )


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
