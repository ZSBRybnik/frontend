import {
  FunctionComponent,
  // eslint-disable-next-line no-restricted-imports
  useState,
} from "react";
import { useParams } from "react-router-dom";
import {
  Page as PageType,
  PageContentItem,
} from "~backend/node_modules/@prisma/postgresql";
import Routes from "~backend/source/server/trpc/constants/routes/routes";
import Page from "../../components/Page/Page";
import useCallAPI, {
  UseCallAPIReturn,
} from "../../hooks/useCallAPI/useCallAPI";
import useMDXEvaluate from "../../hooks/useMDXEvaluate/useMDXEvaluate";

const Subpage: FunctionComponent = () => {
  const {
    name = "",
  }: Readonly<{
    name?: string;
  }> = useParams();
  const { data }: UseCallAPIReturn<PageType> = useCallAPI<PageType>({
    indexName: "pages_by_name",
    indexValue: name,
    gunKey: "pages",
    trpcRoute: Routes.GetPage,
    trpcPayload: {
      name,
    },
  });
  const [content, setContent] = useState<JSX.Element[]>([]);
  const {
    title,
    content: dataContent,
  }: Partial<PageType> &
    Partial<{
      content: PageContentItem[];
    }> = Object(data);
  useMDXEvaluate({
    content: dataContent,
    onEvaluate: ({ content }) => {
      setContent(content);
    },
  });
  return <Page title={title}>{content}</Page>;
};

export default Subpage;
