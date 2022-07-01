import { ipcRenderer } from "electron";

const hardReload = () => {
  ipcRenderer.send("hardReload");
};

export default hardReload;
