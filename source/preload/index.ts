import "source-map-support/register";
import "v8-compile-cache";
import { contextBridge, ContextBridge } from "electron";
import toggleDevelopmentTools from "~preload/api/toggleDevelopmentTools/toggleDevelopmentTools";
import reload from "~preload/api/toggleDevelopmentTools/toggleDevelopmentTools";
import hardReload from "~preload/api/toggleDevelopmentTools/toggleDevelopmentTools";

const { exposeInMainWorld }: ContextBridge = contextBridge;

exposeInMainWorld("api", {
  toggleDevelopmentTools,
  reload,
  hardReload,
});
