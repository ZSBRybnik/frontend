/* eslint-disable no-restricted-imports */
import { create, IPFS } from "ipfs-core";
import { useEffect, useState } from "react";

const useIpfs = () => {
  const [ipfs, setIpfs] = useState<IPFS | null>(null);
  useEffect(() => {
    (async () => {
      if (ipfs) {
        const { cid } = await ipfs.add("Hello world");
        console.info(cid);
      } else {
        setIpfs(await create());
      }
    })();
  }, [ipfs]);
  return {
    ipfs,
  };
};
export default useIpfs;
