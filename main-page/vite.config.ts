import { defineConfig } from "vite";
import * as path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@antv/x6": "@antv/x6/lib",
    },
  },
  plugins: [vue(), AutoImport({}), Components({})],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
