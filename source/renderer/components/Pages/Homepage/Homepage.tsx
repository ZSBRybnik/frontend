import useState from "../../../hooks/useState/useState";
import FeedView from "../../FeedView/FeedView";
import Page from "../../Page/Page";
import PostsView from "../../PostsView/PostsView";
import Switch from "../../Switch/Switch";
import { HomepageComponent } from "./Homepage.types";

const Homepage: HomepageComponent = () => {
  const { setValue: setViewPosts, value: viewPosts } = useState<{
    value: boolean;
  }>({ value: true });
  return (
    <Page noBackground noVerticalPadding defaultChildrenVerticalMargin={15}>
      <Switch
        options={[
          {
            value: "Posts",
            onClick: (): void => {
              setViewPosts(true);
            },
          },
          {
            value: "Feed",
            onClick: (): void => {
              setViewPosts(false);
            },
          },
        ]}
      />
      {viewPosts ? <PostsView /> : <FeedView />}
    </Page>
  );
};
export default Homepage;
