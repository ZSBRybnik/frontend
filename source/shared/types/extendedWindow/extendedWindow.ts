type ExtendedWindow = Window &
  typeof globalThis & {
    api?: {
      isElectron: () => boolean;
      close: () => void;
      minimize: () => void;
      toggleMaximize: () => void;
      toggleFullscreen: () => void;
      extractToSeparateWindow: (address: string) => void;
    };
  };

export default ExtendedWindow;
