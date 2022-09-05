import { useHookstateEffect } from "@hookstate/core";
import { evaluate } from "@mdx-js/mdx";
import * as provider from "@mdx-js/react";
import { useMDXComponents } from "@mdx-js/react";
import {
  FunctionComponent,
  // eslint-disable-next-line no-restricted-imports
  useState,
  //useMemo,
} from "react";
// import { Client, query } from "faunadb";
import { useParams } from "react-router-dom";
import runtime from "react/jsx-runtime.js";
import { Page as PageType } from "~backend/node_modules/@prisma/client";
import Routes from "~backend/source/server/trpc/constants/routes/routes";
// import { gun } from "../..";
// import { useQuery } from "../../components/AppProvider/AppProvider";
import Page from "../../components/Page/Page";
// import useIpfs from "../../hooks/useIpfs/useIpfs";
import useCallAPI from "../../hooks/useCallAPI/useCallAPI";

const Subpage: FunctionComponent = () => {
  const { name = "" } = useParams();
  const { data } = useCallAPI<PageType>({
    indexName: "pages_by_name",
    indexValue: name,
    gunKey: "pages",
    trpcRoute: Routes.GetPage,
    trpcPayload: {
      name,
    },
  });
  const [content, setContent] = useState(<></>);
  const { title }: Partial<PageType> = Object(data);
  const mdxComponents = useMDXComponents();
  useHookstateEffect(() => {
    const { content }: Partial<PageType> = Object(data);
    if (content)
      (async () => {
        const { default: Component } = await evaluate(content, {
          ...provider,
          ...runtime,
        } as any);
        setContent(<Component components={mdxComponents} />);
      })();
  }, [data]);
  return <Page title={title}>{content}</Page>;
};

export default Subpage;
