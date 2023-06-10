import reactPlugin from "@vitejs/plugin-react";
import process from "process/browser";
import { defineConfig, PluginOption } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactPlugin() as PluginOption, tsconfigPaths()],
  define: {
    global: "window",
    process,
  },
});
