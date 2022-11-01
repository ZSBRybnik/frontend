/* eslint-disable max-params */
import useState from "~frontend/source/renderer/hooks/useState/useState";
import { FunctionComponent, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useQuery } from "../../utils/trpc-utilities/trpc-utilities";
import Post from "../Post/Post";
import { Post as PostType } from "~backend/node_modules/@prisma/postgresql";

const PostsView: FunctionComponent = () => {
  const { value: shouldFetch, setValue: setShouldFetch } = useState<{
    value: boolean;
  }>({ value: true });
  const { value: posts, setValue: setPosts } = useState<{
    value: Pick<PostType, "id" | "title" | "brief">[];
  }>({
    value: [],
  });
  const { data } = useQuery(["getPosts", { range: 10, skip: posts.length }], {
    enabled: shouldFetch,
    onSuccess: () => {
      setShouldFetch(false);
    },
  });
  useEffect(() => {
    if (data) {
      setPosts([...posts, ...data]);
    }
  }, [data]);
  return (
    <div>
      {posts.map(({ title, brief, id }, index) => {
        const PostElement = (
          <Post
            title={title}
            brief={brief}
            id={id}
            key={`post-${id}`}
            alt="ZSB Rybnik"
            src="https://zsbrybnik.pl/wp-content/uploads/2017/09/logo_zsb_small.png"
          />
        );
        return posts.length - 1 === index ? (
          <VisibilitySensor
            onChange={(isVisible: boolean) => {
              setShouldFetch(isVisible);
            }}
            key={`posts-sensor-${id}`}
          >
            {PostElement}
          </VisibilitySensor>
        ) : (
          PostElement
        );
      })}
    </div>
  );
};
export default PostsView;
