import { Systeminformation } from "systeminformation";
import { OpenExternalLinkArguments } from "~frontend/source/preload/api/openExternalLink/openExternalLink";

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
      openExternalLink: (argument: OpenExternalLinkArguments) => void;
    };
  };

export default ExtendedWindow;
