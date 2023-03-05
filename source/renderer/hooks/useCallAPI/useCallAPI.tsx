/* eslint-disable sonarjs/cognitive-complexity */
import { Client, query } from "faunadb";
import { useEffect, useMemo } from "react";
import Routes from "~backend/source/server/trpc/constants/routes/routes";
import useState from "~frontend/source/renderer/hooks/useState/useState";
import { gun } from "../..";
import { useQuery } from "../../utils/trpc-utilities/trpc-utilities";
import useIpfs from "../useIpfs/useIpfs";

const { Get, Match, Index } = query;

type UseCallAPIArguments = {
  indexName: string;
  indexValue: query.ExprArg;
  trpcRoute: Routes;
  gunKey: string;
  trpcPayload: Record<string, unknown>;
};

export type UseCallAPIReturn<T> = {
  data: T;
};

const useCallAPI = <T,>({
  indexName,
  indexValue,
  gunKey,
  trpcRoute,
  trpcPayload,
}: UseCallAPIArguments): UseCallAPIReturn<T> => {
  const { value: ipfs } = useIpfs();
  const { value: requestCid, setValue: setRequestCid } = useState<{
    value: null | string;
  }>({ value: null });
  const { value: ipfsResponse, setValue: setIpfsResponse } = useState<{
    value: T | null;
  }>({ value: null });
  const { value: gunResponse, setValue: setGunResponse } = useState<{
    value: T | null;
  }>({ value: null });
  const { value: gunHasChecked, setValue: setGunHasChecked } = useState<{
    value: boolean;
  }>({ value: false });
  const { data: trpcData, isError } = useQuery(
    [trpcRoute as "getPost" | "getPage" | "getPosts", trpcPayload],
    {
      enabled: gunHasChecked && !gunResponse,
    },
  );
  useEffect(() => {
    if (isError) {
      (async () => {
        const faunadbClient = new Client({
          secret: process.env.FAUNADB_KEY || "",
        });
        const {
          data: { cid },
        }: {
          data: { cid: string; name: string };
        } = await faunadbClient.query<{
          data: { cid: string; name: string };
        }>(Get(Match(Index(indexName), indexValue)));
        setRequestCid(cid);
      })();
    }
  }, [isError, indexName]);
  useEffect(() => {
    if (isError) {
      (async () => {
        if (ipfs && requestCid) {
          const ipfsResponse = ipfs?.cat(requestCid);
          if (ipfs.isOnline() && ipfsResponse) {
            for await (const iterator of ipfsResponse) {
              setIpfsResponse(JSON.parse(iterator.toString()));
            }
          }
        }
      })();
    }
  }, [ipfs, requestCid, isError, indexName]);
  useEffect(() => {
    (async () => {
      await gun
        .get(gunKey)
        .get(`${indexValue}`)
        .on<T>((value: unknown) => {
          setGunResponse(value as T);
        });
      setGunHasChecked(true);
    })();
  }, []);
  const data: T = useMemo(() => {
    return gunResponse || trpcData || ipfsResponse;
  }, [gunResponse, ipfsResponse, trpcData]);
  return {
    data,
  };
};

export default useCallAPI;
