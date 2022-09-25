import FeedView from "../../components/FeedView/FeedView";
import Page from "../../components/Page/Page";
import PostsView from "../../components/PostsView/PostsView";
import Switch from "../../components/Switch/Switch";
import useState from "../../hooks/useState/useState";
import { HomepageComponent } from "./Homepage.types";

const Homepage: HomepageComponent = () => {
  const { value: viewPosts, setValue: setViewPosts } = useState<{
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
