import { join } from "path";
import ExtendedBrowserWindow from "~frontend/source/main/types/extendedBrowserWindow/extendedBrowserWindow";

const mainWindow: ExtendedBrowserWindow = {
  content: null,
  settings: {
    width: 800,
    height: 600,
    show: false,
    frame: false,
    transparent: true,
    resizable: true,
    webPreferences: {
      contextIsolation: true,
      preload: join(__dirname, "..", "preload", "index.js"),
    },
  },
};

export default mainWindow;
