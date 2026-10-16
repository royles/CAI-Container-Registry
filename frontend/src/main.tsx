import { createRoot } from "react-dom/client";
import { RepositoriesModalsHost } from "./RepositoriesModals";
import type { ModalKind } from "./RepositoriesModals";

declare global {
  interface Window {
    RegistryRepositoriesUi?: {
      openDeleteRepository: (name: string) => void;
      openUnlockRepository: (name: string) => void;
      openDeleteTag: (repository: string, tag: string) => void;
      openRenameRepository: (name: string) => void;
      openGarbageCollection: () => void;
    };
    __registryModalQueue?: Array<{ kind: ModalKind; repository: string; tag?: string }>;
    registryRepoApiKey?: () => string | null;
    registryRepoPathUrl?: (base: string, repoName: string) => string;
    registryRepoReload?: () => void;
    registryRepoShowStatus?: (text: string, isError: boolean) => void;
    registryRepoOnGcComplete?: (data: Record<string, unknown>) => void;
    openRegistryModal?: (kind: ModalKind, repository: string, tag?: string) => void;
  }
}

const mount = document.getElementById("registry-modals-root");
if (mount) {
  createRoot(mount).render(<RepositoriesModalsHost />);
}
