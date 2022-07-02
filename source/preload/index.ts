import { contextBridge, ContextBridge } from "electron";
import "source-map-support/register";
import "v8-compile-cache";
import {
  default as hardReload,
  default as reload,
  default as toggleDevelopmentTools,
} from "~preload/api/toggleDevelopmentTools/toggleDevelopmentTools";

const { exposeInMainWorld }: ContextBridge = contextBridge;

exposeInMainWorld("api", {
  toggleDevelopmentTools,
  reload,
  hardReload,
});
