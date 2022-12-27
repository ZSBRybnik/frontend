import create, { StoreApi, UseBoundStore } from "zustand";

export type IsSlideOutMenuOpenState = {
  value: boolean;
  setValue: (state: boolean) => void;
  toggle: () => void;
};

const useIsSlideOutMenuOpenStore: UseBoundStore<
  StoreApi<IsSlideOutMenuOpenState>
> = create<IsSlideOutMenuOpenState>((set) => {
  return {
    value: false,
    setValue: (value: boolean) => {
      set(() => {
        return { value };
      });
    },
    toggle: () => {
      set(({ value }) => {
        return { value: !value };
      });
    },
  };
});

export default useIsSlideOutMenuOpenStore;
