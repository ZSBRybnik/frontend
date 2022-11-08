import { contextBridge } from "electron";
import { osName } from "~frontend/source/native-addon-rust/destination/index.node";

contextBridge.exposeInMainWorld("osCheck", () => {
  return osName();
});
