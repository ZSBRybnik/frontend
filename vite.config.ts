import reactPlugin from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactPlugin(), tsconfigPaths()],
  define: {
    global: "window",
  },
});
