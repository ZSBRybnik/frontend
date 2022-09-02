/* eslint-disable max-params */
import { useHookstate } from "@hookstate/core";
import { FunctionComponent, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useQuery } from "../../components/AppProvider/AppProvider";
import Page from "../Page/Page";
import Post from "../Post/Post";

const PostsView: FunctionComponent = () => {
  const shouldFetchState = useHookstate(true);
  const lastIdState = useHookstate(18);
  const postsState = useHookstate(
    [] as { title: string; id: number; brief: string }[],
  );
  const { data } = useQuery(
    ["getPosts", { range: 100, startId: lastIdState.get() }],
    {
      enabled: shouldFetchState.get(),
    },
  );
  useEffect(() => {
    if (data) {
      postsState.merge(data);
      const lastId = data.at(-1)?.id;
      lastId && lastIdState.set(lastId + 1);
    }
  }, [data]);
  ///{post.get().title}
  return (
    <>
      {postsState.map((post) => {
        console.log(post);
        return (
          <Post
            title={post.get().title}
            brief={post.get().brief}
            id={post.get().id}
            key={`post-${post.get().id}`}
            alt="ZSB Rybnik"
            src="https://zsbrybnik.pl/wp-content/uploads/2017/09/logo_zsb_small.png"
          />
        );
      })}
      <VisibilitySensor
        onChange={(isVisible: boolean) => {
          shouldFetchState.set(isVisible);
        }}
      >
        <div>123</div>
      </VisibilitySensor>
    </>
  );
};
export default PostsView;
