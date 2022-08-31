import { contextBridge, ContextBridge } from "electron";
import isElectron from "is-electron";
import "source-map-support/register";
import "v8-compile-cache";
import close from "~frontend/source/preload/api/close/close";
import hardReload from "~frontend/source/preload/api/hardReload/hardReload";
import minimize from "~frontend/source/preload/api/minimize/minimize";
import reload from "~frontend/source/preload/api/reload/reload";
import toggleDevelopmentTools from "~frontend/source/preload/api/toggleDevelopmentTools/toggleDevelopmentTools";
import toggleFullscreen from "./api/toggleFullscreen/toggleFullscreen";
import toggleMaximize from "./api/toggleMaximize/toggleMaximize";

const { exposeInMainWorld }: ContextBridge = contextBridge;

exposeInMainWorld("api", {
  toggleDevelopmentTools,
  reload,
  hardReload,
  close,
  minimize,
  toggleMaximize,
  toggleFullscreen,
  isElectron,
});
