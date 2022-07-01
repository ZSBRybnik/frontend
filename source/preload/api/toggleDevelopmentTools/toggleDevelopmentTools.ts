import { ipcRenderer } from "electron";

const toggleDevelopmentTools = () => {
  ipcRenderer.send("toggleDevTools");
};

export default toggleDevelopmentTools;
