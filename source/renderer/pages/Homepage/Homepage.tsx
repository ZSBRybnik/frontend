import Switch from "../../components/ExtendedSwitch/ExtendedSwitch";
import FeedView from "../../components/FeedView/FeedView";
import Page from "../../components/Page/Page";
import PostsView from "../../components/PostsView/PostsView";
import useState from "../../hooks/useState/useState";
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
