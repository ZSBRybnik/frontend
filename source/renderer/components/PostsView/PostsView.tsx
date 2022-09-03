/* eslint-disable max-params */
import { useHookstate } from "@hookstate/core";
import { FunctionComponent, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useQuery } from "../../components/AppProvider/AppProvider";
import Post from "../Post/Post";

const PostsView: FunctionComponent = () => {
  const shouldFetchState = useHookstate(true);
  const postsState = useHookstate(
    [] as { title: string; id: number; brief: string }[],
  );
  const { data } = useQuery(
    ["getPosts", { range: 10, skip: postsState.length }],
    {
      enabled: shouldFetchState.get(),
      onSuccess: () => {
        shouldFetchState.set(false);
      },
    },
  );
  useEffect(() => {
    if (data) {
      postsState.merge(data);
    }
  }, [data]);
  return (
    <div>
      {postsState.map((post, index) => {
        const PostElement = (
          <Post
            title={post.get().title}
            brief={post.get().brief}
            id={post.get().id}
            key={`post-${post.get().id}`}
            alt="ZSB Rybnik"
            src="https://zsbrybnik.pl/wp-content/uploads/2017/09/logo_zsb_small.png"
          />
        );
        return postsState.length - 1 === index ? (
          <VisibilitySensor
            onChange={(isVisible: boolean) => {
              shouldFetchState.set(isVisible);
            }}
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
