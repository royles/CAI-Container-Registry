import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, "../app/static/ui"),
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "RegistryRepositoriesUi",
      formats: ["es"],
      fileName: () => "repositories-modals.js",
    },
    rollupOptions: {
      external: [],
    },
  },
});
