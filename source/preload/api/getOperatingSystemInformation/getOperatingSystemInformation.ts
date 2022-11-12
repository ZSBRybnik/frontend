import { ipcRenderer } from "electron";
import IpcEvents from "~frontend/source/shared/types/ipcEvents/ipcEvents";

const getOperatingSystemInformation = async () => {
  return await ipcRenderer.invoke(IpcEvents.GetOperatingSystemInformation);
};

export default getOperatingSystemInformation;
