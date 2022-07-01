import { app } from "electron";

const { relaunch, quit } = app;

export type HardReload = () => void;

const hardReload: HardReload = (): void => {
  relaunch();
  quit();
};

export default hardReload;
