import { useHookstate, useHookstateEffect } from "@hookstate/core";
import { evaluate } from "@mdx-js/mdx";
import * as provider from "@mdx-js/react";
import { useMDXComponents } from "@mdx-js/react";
import {
  FunctionComponent,
  useEffect,
  useMemo,
  // eslint-disable-next-line no-restricted-imports
  useState,
} from "react";
import { Client, query } from "faunadb";
import { useParams } from "react-router-dom";
import runtime from "react/jsx-runtime.js";
import { Page as PageType } from "~backend/node_modules/@prisma/client";
import Routes from "~backend/source/server/trpc/constants/routes/routes";
import { gun } from "../..";
import { useQuery } from "../../components/AppProvider/AppProvider";
import Page from "../../components/Page/Page";
import useIpfs from "../../hooks/useIpfs/useIpfs";

const { Get, Match, Index } = query;

const Subpage: FunctionComponent = () => {
  const { name = "" } = useParams();
  const { ipfsState } = useIpfs();
  const requestCidState = useHookstate<null | string>(null);
  useEffect(() => {
    (async () => {
      const faunadbClient = new Client({
        secret: process.env.FAUNADB_KEY || "",
      });
      const {
        data: { cid },
      } = await faunadbClient.query<{
        data: { cid: string; name: string };
      }>(Get(Match(Index("pages_by_name"), name)));
      requestCidState.set(cid);
    })();
  }, []);
  useHookstateEffect(() => {
    (async () => {
      const ipfs = ipfsState.get();
      const requestCid = requestCidState.get();
      if (ipfs && requestCid) {
        const ipfsXD = ipfsState.get()?.get(requestCid);
        if (ipfs.isOnline()) {
          for await (const iterator of ipfsXD!) {
            console.log(iterator.toString());
          }
        }
      }
    })();
  }, [ipfsState, requestCidState]);
  const [gunPage, setGunPage] = useState<PageType | null>(null);
  const [content, setContent] = useState(<></>);
  const { title: gunTitle }: Partial<PageType> = Object(gunPage);
  const [gunHasChecked, setGunHasChecked] = useState(false);
  const { data } = useQuery([Routes.GetPage, { name }], {
    enabled: gunHasChecked && !gunPage,
  });
  const { content: trpcContent, title: trpcTitle }: Partial<PageType> =
    Object(data);
  const mdxComponents = useMDXComponents();
  const title = useMemo(() => {
    return gunTitle || trpcTitle;
  }, [gunTitle, trpcTitle]);
  useEffect(() => {
    (async () => {
      await gun
        .get("pages")
        .get(name)
        .on((value: PageType) => {
          setGunPage(value);
        });
      setGunHasChecked(true);
    })();
  }, []);
  useEffect(() => {
    const { content: gunContent }: Partial<PageType> = Object(gunPage);
    const validContent = gunContent || trpcContent;
    if (validContent)
      (async () => {
        const { default: Component } = await evaluate(validContent, {
          ...provider,
          ...runtime,
        } as any);
        setContent(<Component components={mdxComponents} />);
      })();
  }, [trpcContent, gunPage]);
  return <Page title={title}>{content}</Page>;
};

export default Subpage;
