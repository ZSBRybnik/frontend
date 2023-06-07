import type { Meta, StoryFn } from "@storybook/react";
import type { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "~frontend/source/renderer/components/GlobalStyles/GlobalStyles";
import Post from "~frontend/source/renderer/components/Post/Post";
import type PostProperties from "~frontend/source/renderer/components/Post/Post.types";

export default {
  title: "Post",
  component: Post,
} as Meta<typeof Post>;

const Template: StoryFn<FunctionComponent<PostProperties>> = ({
  ...rest
}: PostProperties): JSX.Element => {
  return (
    <BrowserRouter>
      <GlobalStyle isStorybook />
      <Post {...rest} />
    </BrowserRouter>
  );
};

export const PostExample: StoryFn<typeof Post> = Template.bind({});

PostExample.args = {
  id: 1,
  alt: "Random cat",
  title: "Random cat sleeping",
  brief:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nibh consequat, tempus erat nec, pellentesque ante. Fusce vel libero turpis. Donec cursus dolor ac erat egestas, dignissim vestibulum neque tincidunt",
  src: "https://purr.objects-us-east-1.dream.io/i/20170114_124121.jpg",
};
