import { ipcRenderer } from "electron";
import IpcEvents from "~frontend/source/shared/types/ipcEvents/ipcEvents";

const extractToSeparateWindow = (address: string) => {
  ipcRenderer.send(IpcEvents.ExtractToSeparateWindow, address);
};

export default extractToSeparateWindow;
