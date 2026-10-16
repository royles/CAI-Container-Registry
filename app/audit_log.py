"""Persistent audit trail for registry changes (push, pull, replicate, rename, admin)."""

from __future__ import annotations

import json
import uuid
from dataclasses import dataclass, field
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import TYPE_CHECKING, Any, Literal

if TYPE_CHECKING:
    from app.importer import ImportJob

AuditAction = Literal["replicate", "push", "pull", "rename", "repo_create", "repo_delete"]
AuditStatus = Literal["queued", "running", "pending", "succeeded", "failed"]


@dataclass
class AuditEvent:
    id: str
    action: AuditAction
    status: AuditStatus
    created_at: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    finished_at: str | None = None
    repository: str | None = None
    tag: str | None = None
    source: str | None = None
    old_repository: str | None = None
    digest: str | None = None
    message: str = ""
    related_id: str | None = None

    def to_dict(self) -> dict[str, Any]:
        return {
            "id": self.id,
            "action": self.action,
            "status": self.status,
            "created_at": self.created_at,
            "finished_at": self.finished_at,
            "repository": self.repository,
            "tag": self.tag,
            "source": self.source,
            "old_repository": self.old_repository,
            "digest": self.digest,
            "message": self.message,
            "related_id": self.related_id,
        }

    @classmethod
    def from_dict(cls, data: dict[str, Any]) -> AuditEvent:
        return cls(
            id=data["id"],
            action=data["action"],
            status=data["status"],
            created_at=data.get("created_at") or datetime.now(timezone.utc).isoformat(),
            finished_at=data.get("finished_at"),
            repository=data.get("repository"),
            tag=data.get("tag"),
            source=data.get("source"),
            old_repository=data.get("old_repository"),
            digest=data.get("digest"),
            message=data.get("message") or "",
            related_id=data.get("related_id"),
        )

    def display_target(self) -> str:
        if self.action == "rename" and self.old_repository and self.repository:
            return f"{self.old_repository} → {self.repository}"
        repo = self.repository or "—"
        if self.tag and self.tag != "*":
            return f"{repo}:{self.tag}"
        return repo

    def display_summary(self) -> str:
        if self.action == "replicate" and self.source:
            return f"{self.source} → {self.display_target()}"
        if self.action == "push":
            return f"Pushed {self.display_target()}"
        if self.action == "pull":
            return f"Container pull · {self.display_target()}"
        if self.action == "rename":
            return f"Renamed {self.display_target()}"
        if self.action == "repo_create":
            return f"Created repository {self.repository or '—'}"
        if self.action == "repo_delete":
            return f"Deleted repository {self.repository or '—'}"
        return self.display_target()


class RegistryAuditStore:
    def __init__(self, directory: Path) -> None:
        self.directory = directory
        self.directory.mkdir(parents=True, exist_ok=True)

    def _path(self, event_id: str) -> Path:
        return self.directory / f"{event_id}.json"

    def save(self, event: AuditEvent) -> None:
        self._path(event.id).write_text(json.dumps(event.to_dict(), indent=2), encoding="utf-8")

    def load(self, event_id: str) -> AuditEvent | None:
        path = self._path(event_id)
        if not path.is_file():
            return None
        return AuditEvent.from_dict(json.loads(path.read_text(encoding="utf-8")))

    def load_by_related_id(self, related_id: str) -> AuditEvent | None:
        for path in self.directory.glob("*.json"):
            data = json.loads(path.read_text(encoding="utf-8"))
            if data.get("related_id") == related_id:
                return AuditEvent.from_dict(data)
        return None

    def list_events(self) -> list[AuditEvent]:
        events: list[AuditEvent] = []
        for path in self.directory.glob("*.json"):
            events.append(AuditEvent.from_dict(json.loads(path.read_text(encoding="utf-8"))))
        return sorted(events, key=lambda e: e.created_at, reverse=True)

    def sync_import_job(self, job: "ImportJob") -> AuditEvent:
        event = self.load_by_related_id(job.id) or self.load(job.id)
        if event is None:
            event = AuditEvent(
                id=job.id,
                action="replicate",
                status=_job_status(job.status),
                related_id=job.id,
                created_at=job.created_at,
            )
        event.action = "replicate"
        event.status = _job_status(job.status)
        event.repository = job.target_repo
        event.tag = job.target_tag
        event.source = job.source
        event.message = job.message
        event.created_at = job.created_at
        event.finished_at = job.finished_at
        event.related_id = job.id
        self.save(event)
        return event

    def record_push(
        self,
        repository: str,
        reference: str,
        digest: str,
        *,
        message: str = "",
    ) -> AuditEvent:
        tag = reference if not reference.startswith("sha256:") else None
        event = AuditEvent(
            id=str(uuid.uuid4()),
            action="push",
            status="succeeded",
            repository=repository,
            tag=tag,
            digest=digest,
            message=message or f"Manifest {digest}",
            finished_at=datetime.now(timezone.utc).isoformat(),
        )
        self.save(event)
        return event

    def record_pull(
        self,
        repository: str,
        reference: str,
        digest: str,
        *,
        coalesce_minutes: int = 30,
    ) -> AuditEvent | None:
        """Record one logical container pull (tag reference), not each manifest GET."""
        if _is_digest_reference(reference):
            return None

        now = datetime.now(timezone.utc)
        tag = reference
        for event in self.list_events():
            if event.action != "pull" or event.repository != repository or event.tag != tag:
                continue
            when = _parse_iso(event.finished_at or event.created_at)
            if when and now - when <= timedelta(minutes=coalesce_minutes):
                event.finished_at = now.isoformat()
                event.digest = digest
                event.message = "Container image pull completed"
                self.save(event)
                return event

        event = AuditEvent(
            id=str(uuid.uuid4()),
            action="pull",
            status="succeeded",
            repository=repository,
            tag=tag,
            digest=digest,
            message="Container image pull completed",
            finished_at=now.isoformat(),
        )
        self.save(event)
        return event

    def record_rename(self, old_name: str, new_name: str, *, message: str = "") -> AuditEvent:
        event = AuditEvent(
            id=str(uuid.uuid4()),
            action="rename",
            status="succeeded",
            repository=new_name,
            old_repository=old_name,
            message=message or f"Repository renamed to {new_name}",
            finished_at=datetime.now(timezone.utc).isoformat(),
        )
        self.save(event)
        return event

    def record_repo_create(self, name: str) -> AuditEvent:
        event = AuditEvent(
            id=str(uuid.uuid4()),
            action="repo_create",
            status="succeeded",
            repository=name,
            message=f"Repository {name} created",
            finished_at=datetime.now(timezone.utc).isoformat(),
        )
        self.save(event)
        return event

    def record_repo_delete(self, name: str) -> AuditEvent:
        event = AuditEvent(
            id=str(uuid.uuid4()),
            action="repo_delete",
            status="succeeded",
            repository=name,
            message=f"Repository {name} deleted",
            finished_at=datetime.now(timezone.utc).isoformat(),
        )
        self.save(event)
        return event


def _is_digest_reference(reference: str) -> bool:
    ref = reference.strip()
    return ref.startswith("sha256:") or (len(ref) == 64 and all(c in "0123456789abcdef" for c in ref.lower()))


def _parse_iso(value: str | None) -> datetime | None:
    if not value:
        return None
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return None


def _job_status(status: str) -> AuditStatus:
    if status in ("queued", "running", "pending", "succeeded", "failed"):
        return status  # type: ignore[return-value]
    return "failed"


def audit_event_from_import_job(job: "ImportJob") -> AuditEvent:
    return AuditEvent(
        id=job.id,
        action="replicate",
        status=_job_status(job.status),
        repository=job.target_repo,
        tag=job.target_tag,
        source=job.source,
        message=job.message,
        created_at=job.created_at,
        finished_at=job.finished_at,
        related_id=job.id,
    )


def list_registry_activity(
    audit: RegistryAuditStore,
    import_jobs_dir: Path,
    *,
    limit: int = 50,
) -> list[AuditEvent]:
    """Merge audit files with legacy import jobs not yet mirrored to audit storage."""
    from app.importer import ImportJobStore

    events = audit.list_events()
    replicate_ids = {e.related_id for e in events if e.action == "replicate" and e.related_id}
    replicate_ids |= {e.id for e in events if e.action == "replicate"}
    for job in ImportJobStore(import_jobs_dir).list_jobs():
        if job.id in replicate_ids:
            continue
        events.append(audit_event_from_import_job(job))
    return sorted(events, key=lambda e: e.created_at, reverse=True)[:limit]
