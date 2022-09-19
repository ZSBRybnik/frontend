/* eslint-disable no-restricted-imports */
import { create, IPFS } from "ipfs-core";
import { useEffect, useCallback } from "react";
import useIpfsStore, { IpfsStoreState } from "../../stores/ipfsStore/ipfsStore";

const useIpfs: () => Pick<IpfsStoreState, "value"> = (): Pick<
  IpfsStoreState,
  "value"
> => {
  const { setValue, value }: Pick<IpfsStoreState, "value" | "setValue"> =
    useIpfsStore(
      ({
        value,
        setValue,
      }: IpfsStoreState): Pick<IpfsStoreState, "value" | "setValue"> => {
        return { setValue, value };
      },
    );
  const createIpfsConnection: () => Promise<void> = useCallback(async () => {
    if (!value) {
      try {
        const connection: IPFS = await create();
        setValue(connection);
      } catch {
        setTimeout(async () => {
          await createIpfsConnection();
        }, 5_000);
      }
    }
  }, [value]);
  useEffect((): void => {
    (async (): Promise<void> => {
      await createIpfsConnection();
    })();
  }, []);
  return {
    value,
  };
};
export default useIpfs;
