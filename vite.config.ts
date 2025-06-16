import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), svgr()],
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    watch: {
      usePolling: true,
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
  },
  build: {
    outDir: "build"
  }
});
