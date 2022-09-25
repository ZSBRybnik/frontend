import { useHookstate } from "@hookstate/core";
import FeedView from "../../components/FeedView/FeedView";
import Page from "../../components/Page/Page";
import PostsView from "../../components/PostsView/PostsView";
import Switch from "../../components/Switch/Switch";
import { HomepageComponent } from "./Homepage.types";

const Homepage: HomepageComponent = () => {
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
