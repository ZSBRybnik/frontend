/* eslint-disable no-restricted-imports */
import { useHookstateEffect } from "@hookstate/core";
import { evaluate } from "@mdx-js/mdx";
import * as provider from "@mdx-js/react";
import { useMDXComponents } from "@mdx-js/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import runtime from "react/jsx-runtime.js";
import { Post as PostType } from "~backend/node_modules/@prisma/client";
import Routes from "~backend/source/server/trpc/constants/routes/routes";
import Page from "../../components/Page/Page";
import useCallAPI from "../../hooks/useCallAPI/useCallAPI";

const Post = () => {
  const { id = "0" } = useParams();
  const [content, setContent] = useState(<></>);
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
  const { title, author }: Partial<PostType> = Object(data);
  useHookstateEffect(() => {
    const { content }: Partial<PostType> = Object(data);
    if (content)
      (async () => {
        const { default: Component } = await evaluate(content, {
          ...provider,
          ...runtime,
        } as any);
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
