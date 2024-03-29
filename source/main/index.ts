/* eslint-disable max-params */
import { app, BrowserWindow, ipcMain, IpcMainEvent, Menu } from "electron";
import { join } from "path";
import { fromEvent } from "rxjs";
import "source-map-support/register";
import SuperExpressive from "super-expressive";
import { osInfo } from "systeminformation";
import "v8-compile-cache";
import "~frontend/source/main/clients/gunClient/gunClient";
import { port } from "~frontend/source/main/rest/index";
import AppEvents from "~frontend/source/main/types/appEvents/appEvents";
import BrowserWindowEvent from "~frontend/source/main/types/browserWindowEvent/browserWindowEvent";
import { ExtendedBrowserWindowWithContent } from "~frontend/source/main/types/extendedBrowserWindow/extendedBrowserWindow";
import hardReload from "~frontend/source/main/utils/hardReload/hardReload";
import reload from "~frontend/source/main/utils/reload/reload";
import toggleDevelopmentTools from "~frontend/source/main/utils/toggleDevelopmentTools/toggleDevelopmentTools";
import mainWindow from "~frontend/source/main/windows/mainWindow/mainWindow";
import IpcEvents from "~frontend/source/shared/types/ipcEvents/ipcEvents";
import getTray from "./utils/getTray/getTray";

ipcMain.handle(IpcEvents.GetOperatingSystemInformation, async () => {
  return await osInfo();
});

app.on(AppEvents.Ready, (): void => {
  Menu.setApplicationMenu(null);
  mainWindow.content = new BrowserWindow(mainWindow.settings);
  mainWindow.content.loadURL(`http://localhost:${port}/cat`);
  fromEvent(mainWindow.content, BrowserWindowEvent.ReadyToShow).subscribe(
    () => {
      const { content }: ExtendedBrowserWindowWithContent =
        mainWindow as ExtendedBrowserWindowWithContent;
      fromEvent(ipcMain, IpcEvents.ExtractToSeparateWindow).subscribe(
        (argument) => {
          const [, address] = argument as [IpcMainEvent, string];
          if (
            typeof address === "string" &&
            SuperExpressive()
              .string(`localhost:${port}`)
              .toRegex()
              .test(address)
          ) {
            const newWindow = new BrowserWindow({
              width: 800,
              height: 600,
              frame: false,
              transparent: true,
              resizable: true,
              webPreferences: {
                contextIsolation: true,
                preload: join(__dirname, "..", "preload", "index.js"),
              },
            });
            newWindow.loadURL(address);
          }
        },
      );
      fromEvent(ipcMain, IpcEvents.ToggleDevelopmentTools).subscribe(
        (): void => {
          toggleDevelopmentTools(content);
        },
      );
      fromEvent(ipcMain, IpcEvents.Reload).subscribe((): void => {
        reload(content);
      });
      fromEvent(ipcMain, IpcEvents.Close).subscribe((): void => {
        app.quit();
      });
      fromEvent(ipcMain, IpcEvents.Minimize).subscribe((): void => {
        mainWindow.content?.minimize();
      });
      fromEvent(ipcMain, IpcEvents.ToggleMaximize).subscribe((): void => {
        if (mainWindow.content?.isMaximized()) {
          mainWindow.content?.unmaximize();
        } else {
          mainWindow.content?.maximize();
        }
      });
      fromEvent(ipcMain, IpcEvents.ToggleFullscreen).subscribe((): void => {
        mainWindow.content?.setFullScreen(
          /*!mainWindow.content?.isFullScreen()*/ true,
        );
      });
      fromEvent(ipcMain, IpcEvents.HardReload).subscribe(hardReload);
      content?.show();
      toggleDevelopmentTools(content);
      getTray();
    },
  );
});
