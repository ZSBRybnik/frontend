import { evaluate } from "@mdx-js/mdx";
import * as provider from "@mdx-js/react";
import { useMDXComponents } from "@mdx-js/react";
import { Page as PageType } from "backend/node_modules/@prisma/client";
import Routes from "backend/source/server/trpc/constants/routes/routes";
import Gun from "gun";
import {
  FunctionComponent,
  useEffect,
  useMemo,
  // eslint-disable-next-line no-restricted-imports
  useState,
} from "react";
import { useParams } from "react-router-dom";
import runtime from "react/jsx-runtime.js";
import { useQuery } from "../../components/AppProvider/AppProvider";
import Page from "../../components/Page/Page";

const gun = Gun("http://localhost:3000/gun");

const Subpage: FunctionComponent = () => {
  const { name = "" } = useParams();
  const [gunPage, setGunPage] = useState<object | null>(null);
  const { title: gunTitle }: PageType = Object(gunPage);
  const [gunHasChecked, setGunHasChecked] = useState(false);
  const { data } = useQuery([Routes.GetPage, { name }], {
    enabled: gunHasChecked && !gunPage,
  });
  const { content: trpcContent, title: trpcTitle }: PageType = Object(data);
  const [content, setContent] = useState(<></>);
  const mdxComponents = useMDXComponents();
  useEffect(() => {
    (async () => {
      await gun
        .get("pages")
        .get(name)
        .on((value: object) => {
          setGunPage(value);
        });
      setGunHasChecked(true);
    })();
  }, []);
  useEffect(() => {
    const { content: gunContent }: PageType = Object(gunPage);
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
  const title = useMemo(() => {
    return gunTitle || trpcTitle;
  }, [gunTitle, trpcTitle]);
  return <Page title={title}>{content}</Page>;
};

export default Subpage;
