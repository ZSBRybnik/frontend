import { BrowserWindow } from "electron";

export type Reload = (window: BrowserWindow) => void;

const reload: Reload = (window: BrowserWindow): void => {
  window.webContents.reload();
};

export default reload;
