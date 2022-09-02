/* eslint-disable max-params */
import { useHookstate } from "@hookstate/core";
import { FunctionComponent } from "react";
import FeedView from "../../components/FeedView/FeedView";
import Page from "../../components/Page/Page";
import PostsView from "../../components/PostsView/PostsView";
import Switch from "../../components/Switch/Switch";

const Homepage: FunctionComponent = () => {
  const viewPostsState = useHookstate(true);
  return (
    <Page noBackground noVerticalPadding defaultChildrenVerticalMargin={15}>
      <Switch
        options={[
          {
            value: "Posts",
            onClick: () => {
              viewPostsState.set(true);
            },
          },
          {
            value: "Feed",
            onClick: () => {
              viewPostsState.set(false);
            },
          },
        ]}
      />
      {viewPostsState.get() ? <PostsView /> : <FeedView />}
    </Page>
  );
};
export default Homepage;

/* <div>
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
      </div> */
