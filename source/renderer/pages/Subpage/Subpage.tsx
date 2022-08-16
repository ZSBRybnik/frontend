import { evaluate } from "@mdx-js/mdx";
import * as provider from "@mdx-js/react";
import { useMDXComponents } from "@mdx-js/react";
import Routes from "backend/source/server/trpc/constants/routes/routes";
// eslint-disable-next-line no-restricted-imports
import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import runtime from "react/jsx-runtime.js";
import { useQuery } from "../../components/AppProvider/AppProvider";
import Page from "../../components/Page/Page";

const Subpage: FunctionComponent = () => {
  const { name = "" } = useParams();
  const { data } = useQuery([Routes.GetPage, { name }]);
  const { content, title }: { content: string; title: string } = Object(data);
  const [contentState, setContentState] = useState(<></>);
  const mdxComponents = useMDXComponents();
  useEffect(() => {
    (async () => {
      const { default: Component } = await evaluate(content, {
        ...provider,
        ...runtime,
      } as any);
      setContentState(<Component components={mdxComponents} />);
    })();
  }, [content]);
  return <Page title={title}>{contentState}</Page>;
};

export default Subpage;
