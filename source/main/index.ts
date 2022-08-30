import { app, BrowserWindow, ipcMain, Menu } from "electron";
import express, { Express } from "express";
import { join } from "path";
import { fromEvent } from "rxjs";
import "source-map-support/register";
import "v8-compile-cache";
import AppEvents from "~frontend/source/main/types/appEvents/appEvents";
import BrowserWindowEvent from "~frontend/source/main/types/browserWindowEvent/browserWindowEvent";
import { ExtendedBrowserWindowWithContent } from "~frontend/source/main/types/extendedBrowserWindow/extendedBrowserWindow";
import hardReload from "~frontend/source/main/utils/hardReload/hardReload";
import reload from "~frontend/source/main/utils/reload/reload";
import setupServerListening from "~frontend/source/main/utils/setupServerListening/setupServerListening";
import toggleDevelopmentTools from "~frontend/source/main/utils/toggleDevelopmentTools/toggleDevelopmentTools";
import mainWindow from "~frontend/source/main/windows/mainWindow/mainWindow";
import IpcEvents from "~frontend/source/shared/types/ipcEvents/ipcEvents";

const server: Express = express();
server.use(express.static(join(__dirname, "..", "..")));
const port: number = 10000;

app.on(AppEvents.Ready, (): void => {
  setupServerListening({ server, port });
  Menu.setApplicationMenu(null);
  mainWindow.content = new BrowserWindow(mainWindow.settings);
  mainWindow.content.loadURL(`http://localhost:${port}`);
  fromEvent(mainWindow.content, BrowserWindowEvent.ReadyToShow).subscribe(
    () => {
      const { content }: ExtendedBrowserWindowWithContent =
        mainWindow as ExtendedBrowserWindowWithContent;
      fromEvent(ipcMain, IpcEvents.ToggleDevelopmentTools).subscribe(() => {
        toggleDevelopmentTools(content);
      });
      fromEvent(ipcMain, IpcEvents.Reload).subscribe(() => {
        reload(content);
      });
      fromEvent(ipcMain, IpcEvents.Close).subscribe(() => {
        app.quit();
      });
      fromEvent(ipcMain, IpcEvents.Minimize).subscribe(() => {
        mainWindow.content?.minimize();
      });
      fromEvent(ipcMain, IpcEvents.ToggleMaximize).subscribe(() => {
        if (mainWindow.content?.isMaximized()) {
          mainWindow.content?.unmaximize();
        } else {
          mainWindow.content?.maximize();
        }
      });
      fromEvent(ipcMain, IpcEvents.HardReload).subscribe(hardReload);
      content?.show();
      toggleDevelopmentTools(content);
    },
  );
});
