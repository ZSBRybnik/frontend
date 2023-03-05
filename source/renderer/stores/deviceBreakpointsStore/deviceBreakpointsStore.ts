import { create, StoreApi, UseBoundStore } from "zustand";

export type UseDeviceBreakpointsState = {
  value: string;
  setValue: (state: string) => void;
  isTablet: boolean;
  isMobile: boolean;
  isDesktop: boolean;
};

const useDeviceBreakpointsStore: UseBoundStore<
  StoreApi<UseDeviceBreakpointsState>
> = create<UseDeviceBreakpointsState>((set) => {
  return {
    value: "desktop",
    setValue: (value: string) => {
      set(() => {
        return {
          value,
          isMobile: value === "mobile",
          isTablet: value === "tablet",
          isDesktop: value === "desktop",
        };
      });
    },
    isMobile: true,
    isTablet: true,
    isDesktop: true,
  };
});

export default useDeviceBreakpointsStore;
