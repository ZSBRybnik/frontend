import { ipcRenderer } from "electron";

const reload = () => {
  ipcRenderer.send("reload");
};

export default reload;
