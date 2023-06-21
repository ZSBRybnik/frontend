import { create, StoreApi, UseBoundStore } from "zustand";

export type UserSettingsState = {
  settings: {
    enableBroadcastCenter: boolean;
  };
  setSettings: (state: UserSettingsState["settings"]) => void;
};

const useUserSettingsStore: UseBoundStore<StoreApi<UserSettingsState>> =
  create<UserSettingsState>((set) => {
    return {
      settings: {
        enableBroadcastCenter: false,
      },
      setSettings: (settings: Partial<UserSettingsState["settings"]>) => {
        set(({ settings: oldSettings }) => {
          return { settings: { ...oldSettings, ...settings } };
        });
      },
    };
  });

export default useUserSettingsStore;
