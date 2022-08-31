import { ipcRenderer } from "electron";

const toggleFullscreen = () => {
  ipcRenderer.send("toggleFullscreen");
};

export default toggleFullscreen;
