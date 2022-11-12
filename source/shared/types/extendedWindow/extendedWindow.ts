import { Systeminformation } from "systeminformation";

type ExtendedWindow = Window &
  typeof globalThis & {
    api?: {
      isElectron: () => boolean;
      close: () => void;
      minimize: () => void;
      toggleMaximize: () => void;
      toggleFullscreen: () => void;
      extractToSeparateWindow: (address: string) => void;
      getOperatingSystemInformation: () => Promise<Systeminformation.OsData>;
    };
  };

export default ExtendedWindow;
