/* eslint-disable max-params */
import { evaluate, EvaluateOptions } from "@mdx-js/mdx";
import * as provider from "@mdx-js/react";
import { useMDXComponents } from "@mdx-js/react";
import { useParams } from "react-router-dom";
import reactRuntime from "react/jsx-runtime.js";
import {
  Post as PostType,
  User,
  PostContentItem,
} from "~backend/node_modules/@prisma/postgresql";
import Routes from "~backend/source/server/trpc/constants/routes/routes";
import Page from "../../components/Page/Page";
import useCallAPI from "../../hooks/useCallAPI/useCallAPI";
import useState from "~frontend/source/renderer/hooks/useState/useState";
import { useEffect } from "react";
import { compiler } from "markdown-to-jsx";
import mdxLegacyComponentMapper from "../../constants/mdxLegacyComponentMapper/mdxLegacyComponentMapper";

const Post = () => {
  const { id = "0" } = useParams();
  const { value: content, setValue: setContent } = useState<{
    value: JSX.Element[];
  }>({ value: [] });
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
    content: Pick<PostContentItem, "content" | "runtime">[];
  } = Object(data);
  const { login: author } = Object(authorObject);
  useEffect(() => {
    const {
      content,
    }: PostType & {
      author: Pick<User, "login">;
      content: Pick<PostContentItem, "content" | "runtime" | "id">[];
    } = Object(data);
    if (content?.length) {
      (async () => {
        const transformedContentPromises = content.map(
          async ({ content, runtime, id: contentId }, index) => {
            if (runtime === "classic") {
              const { default: Component } = await evaluate(content, {
                ...provider,
                ...reactRuntime,
              } as unknown as EvaluateOptions);
              return (
                <Component
                  key={`${id}-${contentId}-${index}`}
                  components={mdxComponents}
                />
              );
            }
            if (runtime === "legacy") {
              return compiler(content, mdxLegacyComponentMapper);
            }
            return <></>;
          },
        );
        const transformedContent = await Promise.all(
          transformedContentPromises,
        );
        setContent(transformedContent);
      })();
    }
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
