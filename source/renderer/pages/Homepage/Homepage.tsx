/* eslint-disable max-params */
import { useHookstate } from "@hookstate/core";
import { FunctionComponent } from "react";
import FeedView from "../../components/FeedView/FeedView";
import PostsView from "../../components/PostsView/PostsView";

const Homepage: FunctionComponent = () => {
  const viewPostsState = useHookstate(true);
  return (
    <>
      <div>
        <div
          onClick={() => {
            viewPostsState.set(true);
          }}
          onKeyDown={() => {
            console.log("xd");
          }}
          role="button"
          tabIndex={0}
        >
          POSTS
        </div>
        <div
          onClick={() => {
            viewPostsState.set(false);
          }}
          onKeyDown={() => {
            console.log("xd");
          }}
          role="button"
          tabIndex={0}
        >
          FEED
        </div>
      </div>
      {viewPostsState.get() ? <PostsView /> : <FeedView />}
    </>
  );
};

export default Homepage;
