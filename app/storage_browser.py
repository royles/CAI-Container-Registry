"""Logical file-style browser over on-disk registry layout."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Literal

from app.local_storage import LocalRegistryStorage

EntryKind = Literal["root", "folder", "repository", "tag", "file", "blob", "link"]

_MAX_BLOB_PREFIX_CHILDREN = 512


@dataclass
class BrowseEntry:
    name: str
    kind: EntryKind
    path: str
    size_bytes: int | None = None
    detail: str | None = None
    href: str | None = None

    def to_dict(self) -> dict[str, Any]:
        return {
            "name": self.name,
            "kind": self.kind,
            "path": self.path,
            "size_bytes": self.size_bytes,
            "detail": self.detail,
            "href": self.href,
        }


@dataclass
class BrowseResult:
    path: str
    title: str
    breadcrumbs: list[dict[str, str]]
    entries: list[BrowseEntry]
    note: str | None = None

    def to_dict(self) -> dict[str, Any]:
        return {
            "path": self.path,
            "title": self.title,
            "breadcrumbs": self.breadcrumbs,
            "entries": [e.to_dict() for e in self.entries],
            "note": self.note,
        }


def normalize_browse_path(raw: str | None) -> list[str]:
    raw = (raw or "").strip().strip("/")
    if not raw:
        return []
    parts = [p for p in raw.split("/") if p]
    if any(p in ("", ".", "..") or p.startswith("..") for p in parts):
        raise ValueError("Invalid browse path")
    return parts


def _crumb(label: str, path: str) -> dict[str, str]:
    return {"label": label, "path": path}


def _browse_root(storage: LocalRegistryStorage) -> BrowseResult:
    entries = [
        BrowseEntry(
            "repositories",
            "folder",
            "repositories",
            detail="Repository metadata (tags, manifest revisions)",
        ),
        BrowseEntry(
            "blobs",
            "folder",
            "blobs",
            detail="Content-addressed layers and manifests (sha256)",
        ),
    ]
    uploads = storage.root / "_uploads"
    if uploads.is_dir() and any(uploads.iterdir()):
        entries.append(
            BrowseEntry(
                "_uploads",
                "folder",
                "_uploads",
                detail="In-progress docker push sessions",
            )
        )
    return BrowseResult(
        path="",
        title="Registry storage",
        breadcrumbs=[_crumb("Registry storage", "")],
        entries=entries,
        note=f"Data root: {storage.root}",
    )


def _browse_repositories(storage: LocalRegistryStorage) -> BrowseResult:
    crumbs = [_crumb("Registry storage", ""), _crumb("repositories", "repositories")]
    entries: list[BrowseEntry] = []
    for name in storage.list_repositories():
        entries.append(
            BrowseEntry(
                name,
                "repository",
                f"repositories/{name}",
                detail="Repository",
            )
        )
    if not entries:
        entries.append(
            BrowseEntry(
                "(empty)",
                "folder",
                "repositories",
                detail="No repositories yet",
            )
        )
    return BrowseResult(
        path="repositories",
        title="Repositories",
        breadcrumbs=crumbs,
        entries=entries,
    )


def storage_browser_href(logical_path: str) -> str:
    logical_path = logical_path.strip("/")
    return "/ui/browser" + (f"/{logical_path}" if logical_path else "")


def _split_repo_path(storage: LocalRegistryStorage, parts: list[str]) -> tuple[str, list[str]]:
    if len(parts) < 2:
        raise ValueError("Missing repository")
    rest = parts[1:]
    subsections = {"tags", "revisions", "_manifests"}
    for i in range(len(rest), 0, -1):
        candidate = "/".join(rest[:i])
        tail = rest[i:]
        if tail and tail[0] == "_manifests":
            tail = tail[1:]
        if tail and tail[0] not in subsections and tail != []:
            continue
        try:
            storage.validate_repo_name(candidate)
            repo_dir = storage._repo_dir(candidate)
            if not repo_dir.is_dir():
                continue
            if not (repo_dir / "_manifests").is_dir():
                continue
            return candidate, tail
        except ValueError:
            continue
    raise ValueError("Repository not found")


def _browse_repo_home(storage: LocalRegistryStorage, repo: str) -> BrowseResult:
    base = f"repositories/{repo}"
    crumbs = [
        _crumb("Registry storage", ""),
        _crumb("repositories", "repositories"),
        _crumb(repo, base),
    ]
    tags = storage.list_tags(repo)
    revisions = storage.list_manifest_revision_digests(repo)
    entries: list[BrowseEntry] = [
        BrowseEntry(
            "tags",
            "folder",
            f"{base}/tags",
            detail=f"{len(tags)} tag(s)" if tags else "Named tags → manifest digests",
        ),
        BrowseEntry(
            "revisions",
            "folder",
            f"{base}/revisions",
            detail=f"{len(revisions)} manifest revision(s)" if revisions else "Manifest revisions by digest",
        ),
        BrowseEntry(
            "_manifests",
            "folder",
            f"{base}/_manifests",
            detail="On-disk _manifests tree (same as tags / revisions)",
        ),
    ]
    for tag in tags:
        entries.append(
            BrowseEntry(
                tag,
                "tag",
                f"{base}/tags/{tag}",
                href=f"/repos/{repo}/tags/{tag}",
                detail="Tag",
            )
        )
    note = None
    if not tags and revisions:
        note = (
            f"No named tags found on disk, but {len(revisions)} manifest revision(s) exist. "
            "Open revisions or check tags/index under _manifests."
        )
    return BrowseResult(path=base, title=repo, breadcrumbs=crumbs, entries=entries, note=note)


def _browse_repo_tags(storage: LocalRegistryStorage, repo: str) -> BrowseResult:
    base = f"repositories/{repo}/tags"
    crumbs = [
        _crumb("Registry storage", ""),
        _crumb("repositories", "repositories"),
        _crumb(repo, f"repositories/{repo}"),
        _crumb("tags", base),
    ]
    entries: list[BrowseEntry] = []
    tags = storage.list_tags(repo)
    for tag in tags:
        entries.append(
            BrowseEntry(
                tag,
                "tag",
                f"{base}/{tag}",
                href=f"/repos/{repo}/tags/{tag}",
                detail="Tag",
            )
        )
    note = None
    if not tags:
        revisions = storage.list_manifest_revision_digests(repo)
        if revisions:
            note = (
                f"No tag folders under _manifests/tags, but {len(revisions)} manifest revision(s) exist. "
                f"Open the revisions folder from the repository home page."
            )
            for digest in revisions[:20]:
                hex_part = digest.removeprefix("sha256:")
                entries.append(
                    BrowseEntry(
                        digest[:19] + "…",
                        "blob",
                        f"repositories/{repo}/revisions/sha256/{hex_part}",
                        detail=digest,
                    )
                )
        else:
            entries.append(BrowseEntry("(no tags)", "folder", base, detail="Empty tag list"))
    return BrowseResult(
        path=base,
        title=f"{repo} — tags",
        breadcrumbs=crumbs,
        entries=entries,
        note=note,
    )


def _browse_repo_tag(storage: LocalRegistryStorage, repo: str, tag: str) -> BrowseResult:
    base = f"repositories/{repo}/tags/{tag}"
    crumbs = [
        _crumb("Registry storage", ""),
        _crumb("repositories", "repositories"),
        _crumb(repo, f"repositories/{repo}"),
        _crumb("tags", f"repositories/{repo}/tags"),
        _crumb(tag, base),
    ]
    entries: list[BrowseEntry] = []
    current_path = storage._tag_current_path(repo, tag)
    if current_path.is_file():
        digest = current_path.read_text(encoding="utf-8").strip()
        entries.append(
            BrowseEntry(
                "current",
                "link",
                base,
                detail=digest,
                href=f"/repos/{repo}/tags/{tag}",
            )
        )
        entries.append(
            BrowseEntry(
                "manifest blob",
                "blob",
                f"blobs/sha256/{digest.removeprefix('sha256:')[:2]}/{digest.removeprefix('sha256:')[2:]}/data",
                detail=digest,
            )
        )
    index_dir = storage._repo_dir(repo) / "_manifests" / "tags" / "index" / "sha256"
    if index_dir.is_dir():
        entries.append(
            BrowseEntry("index", "folder", f"{base}/index", detail="Tag index by manifest digest")
        )
    return BrowseResult(
        path=base,
        title=f"{repo}:{tag}",
        breadcrumbs=crumbs,
        entries=entries,
        note="Open the tag page for Runtime Catalog metadata and blob list.",
    )


def _browse_tag_index(storage: LocalRegistryStorage, repo: str, tag: str) -> BrowseResult:
    base = f"repositories/{repo}/tags/{tag}/index"
    index_dir = storage._repo_dir(repo) / "_manifests" / "tags" / "index" / "sha256"
    crumbs = [
        _crumb("Registry storage", ""),
        _crumb("repositories", "repositories"),
        _crumb(repo, f"repositories/{repo}"),
        _crumb("tags", f"repositories/{repo}/tags"),
        _crumb(tag, f"repositories/{repo}/tags/{tag}"),
        _crumb("index", base),
    ]
    entries: list[BrowseEntry] = []
    if index_dir.is_dir():
        for hex_file in sorted(index_dir.iterdir()):
            if hex_file.is_file():
                entries.append(
                    BrowseEntry(
                        hex_file.name,
                        "file",
                        base,
                        size_bytes=hex_file.stat().st_size,
                        detail=hex_file.read_text(encoding="utf-8").strip()[:80],
                    )
                )
    return BrowseResult(path=base, title=f"{repo}:{tag} — index", breadcrumbs=crumbs, entries=entries)


def _browse_repo_revisions(storage: LocalRegistryStorage, repo: str) -> BrowseResult:
    base = f"repositories/{repo}/revisions"
    crumbs = [
        _crumb("Registry storage", ""),
        _crumb("repositories", "repositories"),
        _crumb(repo, f"repositories/{repo}"),
        _crumb("revisions", base),
    ]
    entries: list[BrowseEntry] = []
    for digest in storage.list_manifest_revision_digests(repo):
        hex_part = digest.removeprefix("sha256:")
        entries.append(
            BrowseEntry(
                hex_part[:16] + "…" if len(hex_part) > 16 else hex_part,
                "folder",
                f"{base}/sha256/{hex_part}",
                detail=digest,
            )
        )
    if not entries:
        entries.append(BrowseEntry("(none)", "folder", base, detail="No manifest revisions"))
    return BrowseResult(path=base, title=f"{repo} — revisions", breadcrumbs=crumbs, entries=entries)


def _browse_revision_digest(storage: LocalRegistryStorage, repo: str, hex_digest: str) -> BrowseResult:
    base = f"repositories/{repo}/revisions/sha256/{hex_digest}"
    link_path = (
        storage._repo_dir(repo) / "_manifests" / "revisions" / "sha256" / hex_digest / "link"
    )
    crumbs = [
        _crumb("Registry storage", ""),
        _crumb("repositories", "repositories"),
        _crumb(repo, f"repositories/{repo}"),
        _crumb("revisions", f"repositories/{repo}/revisions"),
        _crumb(f"sha256:{hex_digest[:12]}…", base),
    ]
    entries: list[BrowseEntry] = []
    if link_path.is_file():
        digest = link_path.read_text(encoding="utf-8").strip()
        entries.append(
            BrowseEntry("link", "link", base, detail=digest, size_bytes=link_path.stat().st_size)
        )
        entries.append(
            BrowseEntry(
                "manifest blob",
                "blob",
                f"blobs/sha256/{hex_digest[:2]}/{hex_digest[2:]}/data",
                detail=digest,
            )
        )
    return BrowseResult(
        path=base,
        title=f"Revision sha256:{hex_digest[:12]}…",
        breadcrumbs=crumbs,
        entries=entries,
    )


def _browse_blobs(storage: LocalRegistryStorage) -> BrowseResult:
    crumbs = [_crumb("Registry storage", ""), _crumb("blobs", "blobs")]
    entries: list[BrowseEntry] = []
    sha_root = storage.root / "docker/registry/v2/blobs/sha256"
    if sha_root.is_dir():
        entries.append(
            BrowseEntry("sha256", "folder", "blobs/sha256", detail="SHA-256 content store")
        )
    return BrowseResult(
        path="blobs",
        title="Blobs",
        breadcrumbs=crumbs,
        entries=entries,
        note="Manifests and layers are stored once by digest and shared across repositories.",
    )


def _browse_blobs_sha256(storage: LocalRegistryStorage, subparts: list[str]) -> BrowseResult:
    sha_root = storage._blobs
    crumbs = [
        _crumb("Registry storage", ""),
        _crumb("blobs", "blobs"),
        _crumb("sha256", "blobs/sha256"),
    ]
    logical_base = "blobs/sha256"
    current = sha_root
    for part in subparts:
        logical_base = f"{logical_base}/{part}"
        crumbs.append(_crumb(part, logical_base))
        current = current / part

    entries: list[BrowseEntry] = []
    note: str | None = None

    if not current.exists():
        raise FileNotFoundError(logical_base)

    if current.is_file():
        if current.name != "data":
            raise FileNotFoundError(logical_base)
        size = current.stat().st_size
        hex_full = current.parent.name
        prefix = current.parent.parent.name
        digest = f"sha256:{prefix}{hex_full}" if len(prefix) == 2 else None
        return BrowseResult(
            path=logical_base,
            title="Blob data",
            breadcrumbs=crumbs,
            entries=[
                BrowseEntry("data", "file", logical_base, size_bytes=size, detail=digest),
            ],
            note="Binary blob content (manifest JSON or layer tar).",
        )

    children = sorted(current.iterdir(), key=lambda p: p.name)
    if len(children) > _MAX_BLOB_PREFIX_CHILDREN:
        children = children[:_MAX_BLOB_PREFIX_CHILDREN]
        note = f"Showing first {_MAX_BLOB_PREFIX_CHILDREN} entries; narrow the path to see more."

    for child in children:
        if child.is_dir():
            entries.append(
                BrowseEntry(child.name, "folder", f"{logical_base}/{child.name}")
            )
        elif child.is_file():
            entries.append(
                BrowseEntry(
                    child.name,
                    "file",
                    f"{logical_base}/{child.name}",
                    size_bytes=child.stat().st_size,
                )
            )

    title = subparts[-1] if subparts else "sha256"
    return BrowseResult(
        path=logical_base,
        title=f"Blob store / {title}",
        breadcrumbs=crumbs,
        entries=entries,
        note=note,
    )


def _browse_uploads(storage: LocalRegistryStorage) -> BrowseResult:
    uploads = storage.root / "_uploads"
    crumbs = [_crumb("Registry storage", ""), _crumb("_uploads", "_uploads")]
    entries: list[BrowseEntry] = []
    if uploads.is_dir():
        for session in sorted(uploads.iterdir()):
            if session.is_dir():
                entries.append(
                    BrowseEntry(session.name, "folder", f"_uploads/{session.name}")
                )
    return BrowseResult(path="_uploads", title="Upload sessions", breadcrumbs=crumbs, entries=entries)


def _browse_upload_session(storage: LocalRegistryStorage, session_id: str) -> BrowseResult:
    base = f"_uploads/{session_id}"
    session = storage.root / "_uploads" / session_id
    crumbs = [
        _crumb("Registry storage", ""),
        _crumb("_uploads", "_uploads"),
        _crumb(session_id[:8] + "…", base),
    ]
    entries: list[BrowseEntry] = []
    if session.is_dir():
        for f in sorted(session.iterdir()):
            kind: EntryKind = "file"
            size = f.stat().st_size if f.is_file() else None
            detail = None
            if f.name == "meta.json" and f.is_file():
                detail = f.read_text(encoding="utf-8")[:120]
            entries.append(
                BrowseEntry(f.name, kind, f"{base}/{f.name}", size_bytes=size, detail=detail)
            )
    return BrowseResult(path=base, title=f"Upload {session_id[:8]}…", breadcrumbs=crumbs, entries=entries)


def browse_storage(storage: LocalRegistryStorage, raw_path: str | None) -> BrowseResult:
    parts = normalize_browse_path(raw_path)

    if not parts:
        return _browse_root(storage)

    if parts[0] == "repositories":
        if len(parts) == 1:
            return _browse_repositories(storage)
        repo, tail = _split_repo_path(storage, parts)
        if not tail:
            return _browse_repo_home(storage, repo)
        if tail[0] == "_manifests":
            tail = tail[1:]
            if not tail:
                return _browse_repo_home(storage, repo)
        if tail[0] == "tags":
            if len(tail) == 1:
                return _browse_repo_tags(storage, repo)
            tag = tail[1]
            if len(tail) == 2:
                return _browse_repo_tag(storage, repo, tag)
            if len(tail) == 3 and tail[2] == "index":
                return _browse_tag_index(storage, repo, tag)
        if tail[0] == "revisions":
            if len(tail) == 1:
                return _browse_repo_revisions(storage, repo)
            if len(tail) >= 3 and tail[1] == "sha256":
                return _browse_revision_digest(storage, repo, tail[2])
        raise FileNotFoundError("/".join(parts))

    if parts[0] == "blobs":
        if len(parts) == 1:
            return _browse_blobs(storage)
        if parts[1:] == ["sha256"] or (len(parts) >= 2 and parts[1] == "sha256"):
            sub = parts[2:] if len(parts) > 2 else []
            return _browse_blobs_sha256(storage, sub)
        raise FileNotFoundError("/".join(parts))

    if parts[0] == "_uploads":
        if len(parts) == 1:
            return _browse_uploads(storage)
        return _browse_upload_session(storage, parts[1])

    raise FileNotFoundError("/".join(parts))
