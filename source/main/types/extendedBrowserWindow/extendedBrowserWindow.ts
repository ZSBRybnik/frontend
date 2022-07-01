import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";

type ExtendedBrowserWindow = {
  content: null | BrowserWindow;
  settings: BrowserWindowConstructorOptions;
};

export type ExtendedBrowserWindowWithContent = Omit<
  ExtendedBrowserWindow,
  "content"
> & {
  content: BrowserWindow;
};

export default ExtendedBrowserWindow;
