type ExtendedWindow = Window &
  typeof globalThis & {
    api?: {
      isElectron: () => boolean;
      close: () => void;
      minimize: () => void;
      toggleMaximize: () => void;
    };
  };

export default ExtendedWindow;
