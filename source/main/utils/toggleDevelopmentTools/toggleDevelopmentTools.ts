import { BrowserWindow } from "electron";

export type ToggleDevelopmentTools = (window: BrowserWindow) => void;

const toggleDevelopmentTools: ToggleDevelopmentTools = (
  window: BrowserWindow
): void => {
  window.webContents.toggleDevTools();
};

export default toggleDevelopmentTools;
