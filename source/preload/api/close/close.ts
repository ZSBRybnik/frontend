import { ipcRenderer } from "electron";

const close = () => {
  ipcRenderer.send("close");
};

export default close;
