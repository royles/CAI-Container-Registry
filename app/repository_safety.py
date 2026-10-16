"""Guards so tag-level operations never trigger whole-repository delete."""

from __future__ import annotations

# Path segments used in on-disk layout / URL templates — never valid repository name parts.
_RESERVED_REPO_SEGMENTS = frozenset({"tags", "_manifests", "revisions", "index", "link"})


def reject_misrouted_repository_path(repository: str) -> None:
    """
    Reject repository names that look like a tag-delete URL captured by a greedy {path} param
    (e.g. royles-local/tags/v1). Whole-repository delete must not run on these paths.
    """
    for segment in repository.split("/"):
        if segment in _RESERVED_REPO_SEGMENTS:
            raise ValueError(
                f"'{repository}' is not a repository name for delete/rename/lock operations "
                f"(reserved segment '{segment}'). Remove tags with tag delete instead; "
                "the repository and other tags stay intact."
            )
