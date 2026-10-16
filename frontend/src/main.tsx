import { createRoot } from "react-dom/client";
import { RepositoriesModalsHost } from "./RepositoriesModals";

declare global {
  interface Window {
    RegistryRepositoriesUi?: {
      openDeleteRepository: (name: string) => void;
      openUnlockRepository: (name: string) => void;
    };
    registryRepoApiKey?: () => string | null;
    registryRepoPathUrl?: (base: string, repoName: string) => string;
    registryRepoReload?: () => void;
    registryRepoShowStatus?: (text: string, isError: boolean) => void;
  }
}

const mount = document.getElementById("registry-modals-root");
if (mount) {
  createRoot(mount).render(<RepositoriesModalsHost />);
}
