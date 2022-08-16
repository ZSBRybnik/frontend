import { ipcRenderer } from "electron";

const minimize = () => {
  ipcRenderer.send("minimize");
};

export default minimize;
