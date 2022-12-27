import create, { StoreApi, UseBoundStore } from "zustand";

export type JwtStore = {
  value: string | null;
  setValue: (state: string | null) => void;
};

const useJwtStore: UseBoundStore<StoreApi<JwtStore>> = create<JwtStore>(
  (set) => {
    return {
      value: null,
      setValue: (value: JwtStore["value"]) => {
        set(() => {
          return { value };
        });
      },
    };
  },
);

export default useJwtStore;
