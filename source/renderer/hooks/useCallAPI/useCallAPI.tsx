/* eslint-disable sonarjs/cognitive-complexity */
import {
  useHookstate,
  useHookstateEffect,
  useHookstateMemo,
} from "@hookstate/core";
import { Client, query } from "faunadb";
import Routes from "~backend/source/server/trpc/constants/routes/routes";
import { useQuery } from "../../components/AppProvider/AppProvider";
import useIpfs from "../useIpfs/useIpfs";
import { gun } from "../..";

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
  const { ipfsState } = useIpfs();
  const requestCidState = useHookstate<null | string>(null);
  const ipfsResponseState = useHookstate<T | null>(null);
  const gunResponseState = useHookstate<T | null>(null);
  const gunHasCheckedState = useHookstate(false);
  const { data: trpcData, isError } = useQuery(
    [trpcRoute as any, trpcPayload],
    {
      enabled: gunHasCheckedState.get() && !gunResponseState.get(),
    },
  );
  useHookstateEffect(() => {
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
        requestCidState.set(cid);
      })();
    }
  }, [isError, indexName]);
  useHookstateEffect(() => {
    if (isError) {
      (async () => {
        const ipfs = ipfsState.get();
        const requestCid = requestCidState.get();
        if (ipfs && requestCid) {
          const ipfsResponose = ipfsState.get()?.cat(requestCid);
          if (ipfs.isOnline() && ipfsResponose) {
            for await (const iterator of ipfsResponose) {
              ipfsResponseState.set(JSON.parse(iterator.toString()));
            }
          }
        }
      })();
    }
  }, [ipfsState, requestCidState, isError, indexName]);
  useHookstateEffect(() => {
    (async () => {
      await gun
        .get(gunKey)
        .get(`${indexValue}`)
        .on<T>((value: unknown) => {
          gunResponseState.set(value as T);
        });
      gunHasCheckedState.set(true);
    })();
  }, []);
  const data: T = useHookstateMemo(() => {
    return gunResponseState.get() || trpcData || ipfsResponseState.get();
  }, [gunResponseState, ipfsResponseState]);
  return {
    data,
  };
};

export default useCallAPI;
