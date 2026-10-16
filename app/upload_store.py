"""Temporary storage for in-progress registry blob uploads."""

from __future__ import annotations

import hashlib
import json
import os
import uuid
from pathlib import Path


class BlobUploadStore:
    def __init__(self, root: Path) -> None:
        self.root = root / "_uploads"
        self.root.mkdir(parents=True, exist_ok=True)

    def _session_dir(self, upload_id: str) -> Path:
        return self.root / upload_id

    def _data_path(self, upload_id: str) -> Path:
        return self._session_dir(upload_id) / "data"

    def create(self, repository: str) -> str:
        upload_id = str(uuid.uuid4())
        session = self._session_dir(upload_id)
        session.mkdir(parents=True, exist_ok=False)
        meta = {"repository": repository, "size": 0}
        (session / "meta.json").write_text(json.dumps(meta), encoding="utf-8")
        self._data_path(upload_id).touch()
        return upload_id

    def exists(self, upload_id: str) -> bool:
        return (self._session_dir(upload_id) / "meta.json").is_file()

    def append(self, upload_id: str, chunk: bytes) -> int:
        if not self.exists(upload_id):
            raise FileNotFoundError(upload_id)
        data_path = self._data_path(upload_id)
        with open(data_path, "ab") as handle:
            handle.write(chunk)
        size = data_path.stat().st_size
        meta_path = self._session_dir(upload_id) / "meta.json"
        meta = json.loads(meta_path.read_text(encoding="utf-8"))
        meta["size"] = size
        meta_path.write_text(json.dumps(meta), encoding="utf-8")
        return size

    def read_all(self, upload_id: str) -> bytes:
        return self._data_path(upload_id).read_bytes()

    def complete(self, upload_id: str, digest: str) -> bytes:
        data = self.read_all(upload_id)
        expected = f"sha256:{hashlib.sha256(data).hexdigest()}"
        if digest != expected:
            raise ValueError(f"Digest mismatch: expected {expected}, got {digest}")
        return data

    def delete(self, upload_id: str) -> None:
        session = self._session_dir(upload_id)
        if session.is_dir():
            for path in sorted(session.rglob("*"), reverse=True):
                if path.is_file():
                    path.unlink()
            session.rmdir()

    def rename_repository(self, old_name: str, new_name: str) -> int:
        """Point in-progress uploads at new_name. Returns number of sessions updated."""
        if not self.root.is_dir():
            return 0
        updated = 0
        for meta_path in self.root.glob("*/meta.json"):
            try:
                meta = json.loads(meta_path.read_text(encoding="utf-8"))
            except (json.JSONDecodeError, OSError):
                continue
            if meta.get("repository") == old_name:
                meta["repository"] = new_name
                meta_path.write_text(json.dumps(meta), encoding="utf-8")
                updated += 1
        return updated
