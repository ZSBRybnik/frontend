import { evaluate, EvaluateOptions } from "@mdx-js/mdx";
import * as provider from "@mdx-js/react";
import { useMDXComponents } from "@mdx-js/react";
import { useParams } from "react-router-dom";
import runtime from "react/jsx-runtime.js";
import {
  Post as PostType,
  User,
} from "~backend/node_modules/@prisma/postgresql";
import Routes from "~backend/source/server/trpc/constants/routes/routes";
import Page from "../../components/Page/Page";
import useCallAPI from "../../hooks/useCallAPI/useCallAPI";
import useState from "~frontend/source/renderer/hooks/useState/useState";
import { useEffect } from "react";

const Post = () => {
  const { id = "0" } = useParams();
  const { value: content, setValue: setContent } = useState<{
    value: JSX.Element;
  }>({ value: <></> });
  const { data } = useCallAPI<PostType>({
    indexName: "posts_by_id",
    indexValue: parseInt(id),
    gunKey: "posts",
    trpcRoute: Routes.GetPost,
    trpcPayload: {
      id: parseInt(id),
    },
  });
  const mdxComponents = useMDXComponents();
  const {
    title,
    author: authorObject,
  }: PostType & {
    author: Pick<User, "login">;
  } = Object(data);
  const { login: author } = Object(authorObject);
  useEffect(() => {
    const { content }: Partial<PostType> = Object(data);
    if (content)
      (async () => {
        const { default: Component } = await evaluate(content, {
          ...provider,
          ...runtime,
        } as unknown as EvaluateOptions);
        setContent(<Component components={mdxComponents} />);
      })();
  }, [data]);
  return (
    <Page title={title}>
      {content && (
        <>
          {content}
          <br />
          <div>{author}</div>
        </>
      )}
    </Page>
  );
};

export default Post;
