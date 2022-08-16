import { ipcRenderer } from "electron";

const toggleMaximize = () => {
  ipcRenderer.send("toggleMaximize");
};

export default toggleMaximize;
