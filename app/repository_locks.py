"""Persist admin lock flags that block destructive changes on a repository."""

from __future__ import annotations

import json
from pathlib import Path


class RepositoryLockStore:
    def __init__(self, path: Path) -> None:
        self.path = path
        self.path.parent.mkdir(parents=True, exist_ok=True)

    def _load(self) -> set[str]:
        if not self.path.is_file():
            return set()
        try:
            data = json.loads(self.path.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, OSError):
            return set()
        if not isinstance(data, list):
            return set()
        return {str(x).strip() for x in data if str(x).strip()}

    def _save(self, locked: set[str]) -> None:
        self.path.write_text(
            json.dumps(sorted(locked), indent=2) + "\n",
            encoding="utf-8",
        )

    def list_locked(self) -> list[str]:
        return sorted(self._load())

    def is_locked(self, repository: str) -> bool:
        return repository.strip() in self._load()

    def lock(self, repository: str) -> None:
        name = repository.strip()
        locked = self._load()
        locked.add(name)
        self._save(locked)

    def unlock(self, repository: str) -> None:
        name = repository.strip()
        locked = self._load()
        locked.discard(name)
        self._save(locked)


def assert_repository_unlocked(store: RepositoryLockStore, repository: str) -> None:
    if store.is_locked(repository):
        raise ValueError(
            f"Repository '{repository}' is locked. Unlock it before rename or delete."
        )
