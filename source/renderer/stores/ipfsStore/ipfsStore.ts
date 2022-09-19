import { IPFS } from "ipfs-core";
import create, { StoreApi, UseBoundStore } from "zustand";

export type IpfsStoreState = {
  value: null | IPFS;
  setValue: (state: IPFS) => void;
  clearValue: () => void;
};

const useIpfsStore: UseBoundStore<StoreApi<IpfsStoreState>> =
  create<IpfsStoreState>((set) => {
    return {
      value: null,
      setValue: (value: IPFS) => {
        set(() => {
          return { value };
        });
      },
      clearValue: () => {
        set(() => {
          return { value: null };
        });
      },
    };
  });

export default useIpfsStore;
