"""Browser UI for replicating remote registries into the local CAI registry."""

from __future__ import annotations

import secrets
import uuid
from typing import Annotated

from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException, Request
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel, Field

from app.audit_log import RegistryAuditStore, list_registry_activity, query_registry_activity
from app.cloudera_metadata import inspect_cloudera_runtime_metadata
from app.config import Settings, get_settings
from app.importer import ImageImporter, ImportJob
from app.local_storage import LocalRegistryStorage
from app.repo_rename import registry_host_candidates, rename_repository_with_dependent_metadata
from app.upload_store import BlobUploadStore
from app.remote_client import RemoteRegistryAuth
from app.storage_browser import browse_storage, storage_browser_href

templates = Jinja2Templates(directory="app/templates")
router = APIRouter(tags=["ui"])


class UIRepoMutation(BaseModel):
    app_api_key: str | None = None


class UICreateRepositoryRequest(BaseModel):
    name: str
    app_api_key: str | None = None


class UIRenameRepositoryRequest(BaseModel):
    new_name: str
    app_api_key: str | None = None


def _verify_ui_admin_key(app_api_key: str | None, settings: Settings) -> None:
    if not settings.app_api_key:
        return
    provided = app_api_key or ""
    if not secrets.compare_digest(provided, settings.app_api_key):
        raise HTTPException(status_code=401, detail="Invalid admin API key")


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


def get_audit(settings: Annotated[Settings, Depends(get_settings)]) -> RegistryAuditStore:
    return RegistryAuditStore(settings.audit_log_dir)


def _activity_for_ui(settings: Settings, *, limit: int = 50) -> list:
    audit = RegistryAuditStore(settings.audit_log_dir)
    return list_registry_activity(audit, settings.import_jobs_dir, limit=limit)


def _verify_ui_admin(body: UIReplicateRequest, settings: Settings) -> None:
    _verify_ui_admin_key(body.app_api_key, settings)


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


def _list_repos(storage: LocalRegistryStorage) -> list[dict]:
    repos = []
    for name in storage.list_repositories():
        repos.append({"name": name, "tags": storage.list_tags(name)})
    return repos


def _ui_common_context(
    request: Request,
    storage: LocalRegistryStorage,
    settings: Settings,
) -> dict:
    repos = _list_repos(storage)
    base = str(request.base_url).rstrip("/")
    registry_host = settings.public_registry_host or request.url.netloc
    example_repo = repos[0]["name"] if repos else "my-team/my-image"
    example_tag = repos[0]["tags"][0] if repos and repos[0]["tags"] else "latest"
    return {
        "repositories": repos,
        "data_dir": str(settings.registry_data_dir),
        "app_api_key_required": bool(settings.app_api_key),
        "registry_v2_url": f"{base}/v2/",
        "catalog_url": f"{base}/v2/_catalog",
        "health_url": f"{base}/health",
        "management_api_url": f"{base}/api/v1/",
        "registry_host": registry_host,
        "local_auth_enabled": settings.local_auth_enabled,
        "local_registry_username": settings.local_registry_username,
        "example_manifest_url": f"{base}/v2/{example_repo}/manifests/{example_tag}",
        "example_image_ref": f"{registry_host}/{example_repo}:{example_tag}",
        "browser_href": storage_browser_href,
    }


def _render_ui_page(
    request: Request,
    template: str,
    *,
    active_nav: str,
    page_title: str,
    page_lead: str,
    storage: LocalRegistryStorage,
    settings: Settings,
    **extra,
) -> HTMLResponse:
    context = _ui_common_context(request, storage, settings)
    context.update(
        active_nav=active_nav,
        page_title=page_title,
        page_lead=page_lead,
        **extra,
    )
    return templates.TemplateResponse(request, f"ui/{template}.html", context)


@router.get("/", response_class=HTMLResponse)
@router.get("/ui", response_class=HTMLResponse)
def manage_ui_home(
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    importer: Annotated[ImageImporter, Depends(get_importer)],
    settings: Annotated[Settings, Depends(get_settings)],
) -> HTMLResponse:
    activity = _activity_for_ui(settings, limit=50)
    repos = _list_repos(storage)
    storage_stats = storage.stats()
    total_tags = sum(len(r["tags"]) for r in repos)
    activity_ok = sum(1 for e in activity if e.status == "succeeded")
    activity_fail = sum(1 for e in activity if e.status == "failed")
    activity_active = sum(1 for e in activity if e.status in ("running", "queued", "pending"))
    return _render_ui_page(
        request,
        "home",
        active_nav="home",
        page_title="Overview",
        page_lead="",
        storage=storage,
        settings=settings,
        activity=activity,
        overview={
            "total_tags": total_tags,
            "storage_stats": storage_stats,
            "activity_ok": activity_ok,
            "activity_fail": activity_fail,
            "activity_active": activity_active,
        },
    )


@router.get("/ui/replicate", response_class=HTMLResponse)
def manage_ui_replicate(
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    importer: Annotated[ImageImporter, Depends(get_importer)],
    settings: Annotated[Settings, Depends(get_settings)],
) -> HTMLResponse:
    return _render_ui_page(
        request,
        "replicate",
        active_nav="replicate",
        page_title="Replicate from remote",
        page_lead="Import images from Cloudera or another OCI registry, and review recent replication jobs.",
        storage=storage,
        settings=settings,
        jobs=importer.jobs.list_jobs()[:20],
    )


@router.get("/ui/audit", response_class=HTMLResponse)
def manage_ui_audit(
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    settings: Annotated[Settings, Depends(get_settings)],
) -> HTMLResponse:
    return _render_ui_page(
        request,
        "audit",
        active_nav="audit",
        page_title="Registry audit",
        page_lead="Complete audit trail of registry changes on this application.",
        storage=storage,
        settings=settings,
    )


@router.get("/ui/audit/events")
def ui_audit_events(
    settings: Annotated[Settings, Depends(get_settings)],
    audit: Annotated[RegistryAuditStore, Depends(get_audit)],
    action: str | None = None,
    status: str | None = None,
    q: str | None = None,
    offset: int = 0,
    limit: int = 40,
) -> dict:
    allowed_actions = {
        "push",
        "pull",
        "replicate",
        "rename",
        "repo_create",
        "repo_delete",
    }
    if action and action not in allowed_actions:
        raise HTTPException(status_code=400, detail="Invalid action filter")
    allowed_status = {"succeeded", "failed", "running", "queued", "pending", "active"}
    if status and status not in allowed_status:
        raise HTTPException(status_code=400, detail="Invalid status filter")
    page, total, has_more = query_registry_activity(
        audit,
        settings.import_jobs_dir,
        action=action or None,
        status=status or None,
        q=(q or "").strip() or None,
        offset=offset,
        limit=limit,
    )
    return {
        "events": [e.to_dict() for e in page],
        "total": total,
        "offset": offset,
        "limit": limit,
        "has_more": has_more,
    }


@router.get("/ui/repositories", response_class=HTMLResponse)
def manage_ui_repositories(
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    settings: Annotated[Settings, Depends(get_settings)],
) -> HTMLResponse:
    return _render_ui_page(
        request,
        "repositories",
        active_nav="repositories",
        page_title="Repositories",
        page_lead="Manage repository names, copy pull/push image references, and browse on-disk layout.",
        storage=storage,
        settings=settings,
    )


@router.get("/ui/jobs", response_class=RedirectResponse)
def manage_ui_jobs_redirect() -> RedirectResponse:
    return RedirectResponse(url="/ui/replicate", status_code=302)


@router.get("/ui/api", response_class=HTMLResponse)
def manage_ui_api(
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    settings: Annotated[Settings, Depends(get_settings)],
) -> HTMLResponse:
    return _render_ui_page(
        request,
        "api",
        active_nav="api",
        page_title="Container registry API",
        page_lead="Endpoints and references for docker, Runtime Catalog, and automation.",
        storage=storage,
        settings=settings,
    )


@router.get("/ui/browser", response_class=HTMLResponse)
@router.get("/ui/browser/{storage_path:path}", response_class=HTMLResponse)
def manage_ui_browser(
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    settings: Annotated[Settings, Depends(get_settings)],
    storage_path: str = "",
) -> HTMLResponse:
    try:
        browse = browse_storage(storage, storage_path)
    except (FileNotFoundError, ValueError) as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc
    return _render_ui_page(
        request,
        "browser",
        active_nav="repositories",
        page_title=browse.title,
        page_lead="On-disk registry layout (opened from Repositories). Each folder is a separate page.",
        storage=storage,
        settings=settings,
        browse=browse,
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
    importer._save_job(placeholder)
    background.add_task(_run_replicate, importer, job_id, body)
    return {"job_id": job_id, "status": "queued"}


@router.post("/ui/repositories")
def ui_create_repository(
    body: UICreateRepositoryRequest,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    settings: Annotated[Settings, Depends(get_settings)],
    audit: Annotated[RegistryAuditStore, Depends(get_audit)],
) -> dict:
    _verify_ui_admin_key(body.app_api_key, settings)
    name = body.name.strip()
    try:
        storage.create_repository(name)
    except ValueError as exc:
        raise HTTPException(status_code=409, detail=str(exc)) from exc
    audit.record_repo_create(name)
    return {"name": name, "tags": storage.list_tags(name)}


@router.post("/ui/repositories/{repository:path}/rename")
def ui_rename_repository(
    repository: str,
    body: UIRenameRepositoryRequest,
    request: Request,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    settings: Annotated[Settings, Depends(get_settings)],
    audit: Annotated[RegistryAuditStore, Depends(get_audit)],
) -> dict:
    _verify_ui_admin_key(body.app_api_key, settings)
    new_name = body.new_name.strip()
    try:
        rename_stats = rename_repository_with_dependent_metadata(
            storage,
            repository,
            new_name,
            registry_hosts=registry_host_candidates(settings, request.url.netloc),
            import_jobs_dir=settings.import_jobs_dir,
            upload_store=BlobUploadStore(settings.registry_data_dir),
        )
    except FileNotFoundError as exc:
        raise HTTPException(status_code=404, detail=f"Repository not found: {repository}") from exc
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    audit.record_rename(repository, new_name)
    return {"old_name": repository, "new_name": new_name, **rename_stats}


@router.post("/ui/repositories/{repository:path}/delete")
def ui_delete_repository(
    repository: str,
    body: UIRepoMutation,
    storage: Annotated[LocalRegistryStorage, Depends(get_storage)],
    settings: Annotated[Settings, Depends(get_settings)],
    audit: Annotated[RegistryAuditStore, Depends(get_audit)],
) -> dict:
    _verify_ui_admin_key(body.app_api_key, settings)
    try:
        storage.delete_repository(repository)
    except FileNotFoundError as exc:
        raise HTTPException(status_code=404, detail=f"Repository not found: {repository}") from exc
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    audit.record_repo_delete(repository)
    return {"deleted": repository}


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
    cloudera_meta: dict = {}
    try:
        detail = storage.describe_image(repository, tag)
        try:
            cloudera_meta = inspect_cloudera_runtime_metadata(storage, repository, tag)
        except FileNotFoundError:
            cloudera_meta = {"ok": False, "error": "Image not found"}
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
    return _render_ui_page(
        request,
        "repo_detail",
        active_nav="repositories",
        page_title=f"{repository}:{tag}",
        page_lead="Image asset detail.",
        storage=storage,
        settings=settings,
        repository=repository,
        tag=tag,
        detail=detail,
        manifest_url=f"{base}/v2/{repository}/manifests/{tag}",
        tags_list_url=f"{base}/v2/{repository}/tags/list",
        image_ref=f"{registry_host}/{repository}:{tag}",
        runtime_catalog_ref=f"{registry_host}/{repository}:{tag}",
        registry_host=registry_host,
        cloudera_meta=cloudera_meta,
        diagnostics_url=f"{base}/api/v1/diagnostics/runtime-catalog/{repository}/{tag}",
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
