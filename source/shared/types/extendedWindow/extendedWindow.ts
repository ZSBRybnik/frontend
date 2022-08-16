type ExtendedWindow = Window &
  typeof globalThis & {
    api?: {
      isElectron: () => boolean;
    };
  };

export default ExtendedWindow;
