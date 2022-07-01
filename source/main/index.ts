import { app, BrowserWindow, ipcMain, Menu } from "electron";
import express, { Express } from "express";
import { join } from "path";
import "source-map-support/register";
import "v8-compile-cache";
import AppEvents from "~main/types/appEvents/appEvents";
import BrowserWindowEvent from "~main/types/browserWindowEvent/browserWindowEvent";
import { ExtendedBrowserWindowWithContent } from "~main/types/extendedBrowserWindow/extendedBrowserWindow";
import hardReload from "~main/utils/hardReload/hardReload";
import reload from "~main/utils/reload/reload";
import setupServerListening from "~main/utils/setupServerListening/setupServerListening";
import toggleDevelopmentTools from "~main/utils/toggleDevelopmentTools/toggleDevelopmentTools";
import mainWindow from "~main/windows/mainWindow/mainWindow";
import IpcEvents from "~shared/types/ipcEvents/ipcEvents";

const server: Express = express();
server.use(express.static(join(__dirname, "..", "..")));
const port: number = 10000;

app.on(AppEvents.Ready, (): void => {
  setupServerListening({ server, port });
  Menu.setApplicationMenu(null);
  mainWindow.content = new BrowserWindow(mainWindow.settings);
  mainWindow.content.loadURL(`http://localhost:${port}`);
  mainWindow.content.on(BrowserWindowEvent.ReadyToShow, () => {
    const { content }: ExtendedBrowserWindowWithContent =
      mainWindow as ExtendedBrowserWindowWithContent;
    ipcMain.on(IpcEvents.ToggleDevelopmentTools, (): void => {
      toggleDevelopmentTools(content);
    });
    ipcMain.on(IpcEvents.Reload, (): void => {
      reload(content);
    });
    ipcMain.on(IpcEvents.HardReload, hardReload);
    content?.show();
  });
});
