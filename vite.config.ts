import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import legacy from "@vitejs/plugin-legacy";
import reactPluginBabel from "@vitejs/plugin-react";
import reactPluginSWC from "@vitejs/plugin-react-swc";
import { writeFileSync } from "fs";
import { join } from "path";
import process from "process/browser";
import { compileFile } from "pug";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, type PluginOption } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import getTargetVersion from "./source/scripts/build/utils/getTargetVersion/getTargetVersion";

export default defineConfig(({ mode }) => {
  const result = compileFile(
    join(
      "source",
      "public",
      "notStatic",
      `indexWebVite${mode === "development" ? "Dev" : ""}.pug`,
    ),
    {
      filename: "indexWebVite.pug",
      basedir: join("source", "public", "notStatic"),
    },
  );
  const html: string = result();
  writeFileSync("index.html", html.replaceAll("%PUBLIC_URL%", "public"));
  return {
    build: {
      outDir: "destination",
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: "globalThis",
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,
            buffer: true,
          }),
        ],
      },
    },
    publicDir: join("source", "public", "static"),
    plugins: [
      visualizer({
        emitFile: true,
        filename: join("bundle-analyzes", "vite-analyzer-report.html"),
      }),
      legacy({
        targets: getTargetVersion({ targetToModern: false }).split(","),
      }),
      mode === "development" ? reactPluginSWC() : reactPluginBabel(),
      tsconfigPaths(),
    ] as PluginOption[],
    resolve: {
      alias: {
        "react/jsx-runtime.js": "react/jsx-runtime",
        "react/jsx-dev-runtime.js": "react/jsx-dev-runtime",
        zlib: "zlib",
        stream: "stream-browserify",
        Buffer: "buffer",
        util: "util",
        process: "process/browser",
      },
    },
    define: {
      global: "window",
      process,
    },
  };
});
