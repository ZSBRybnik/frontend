/* eslint-disable no-restricted-imports */
import { create } from "ipfs-core";
import { useHookstate, useHookstateEffect } from "@hookstate/core";
import ipfsStore from "../../stores/ipfsStore/ipfsStore";

const useIpfs = () => {
  const ipfsState = useHookstate(ipfsStore);
  useHookstateEffect(() => {
    if (!ipfsState.get()) {
      (async () => {
        try {
          const connection = await create();
          ipfsState.set(connection);
        } catch {
          console.info("Already created");
        }
      })();
    }
  }, []);
  return {
    ipfsState,
  };
};
export default useIpfs;
