/* eslint-disable no-restricted-imports */
import { evaluate } from "@mdx-js/mdx";
import * as provider from "@mdx-js/react";
import { useMDXComponents } from "@mdx-js/react";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import runtime from "react/jsx-runtime.js";
import { Post as PostType } from "~backend/node_modules/@prisma/client";
import { useQuery } from "~frontend/source/renderer/components/AppProvider/AppProvider";
import { gun } from "../..";
import Page from "../../components/Page/Page";

const Post = () => {
  const { id = "0" } = useParams();
  const [gunPost, setGunPost] = useState<PostType | null>(null);
  const { title: gunTitle, author: gunAuthor }: Partial<PostType> =
    Object(gunPost);
  const [content, setContent] = useState(<></>);
  const [gunHasChecked, setGunHasChecked] = useState(false);
  const { data, isLoading } = useQuery(["getPost", { id: parseInt(id) }], {
    enabled: gunHasChecked && !gunPost,
  });
  const mdxComponents = useMDXComponents();
  const {
    title: trpcTitle,
    author: trpcAuthor,
    content: trpcContent,
  }: Partial<PostType> = Object(data);
  useEffect(() => {
    (async () => {
      await gun
        .get("posts")
        .get(id)
        .on((value: PostType) => {
          setGunPost(value);
        });
      setGunHasChecked(true);
    })();
  }, []);
  useEffect(() => {
    const { content: gunContent }: Partial<PostType> = Object(gunPost);
    const validContent = gunContent || trpcContent;
    if (validContent)
      (async () => {
        const { default: Component } = await evaluate(validContent, {
          ...provider,
          ...runtime,
        } as any);
        setContent(<Component components={mdxComponents} />);
      })();
  }, [trpcContent, gunPost]);
  const title = useMemo(() => {
    return gunTitle || trpcTitle;
  }, [gunTitle, trpcTitle]);
  const author = useMemo(() => {
    return gunTitle || trpcTitle;
  }, [gunAuthor, trpcAuthor]);
  return (
    <Page title={title}>
      {!isLoading && (
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
