import type { Meta, StoryFn } from "@storybook/react";
import type { FunctionComponent } from "react";
import GlobalStyle from "~frontend/source/renderer/components/GlobalStyles/GlobalStyles";
import Loader from "~frontend/source/renderer/components/Loader/Loader";

export default {
  title: "Loader",
  component: Loader,
} as Meta<typeof Loader>;

const Template: StoryFn<FunctionComponent> = (): JSX.Element => {
  return (
    <>
      <GlobalStyle isStorybook />
      <Loader />
    </>
  );
};

export const LoaderExample: StoryFn<typeof Loader> = Template.bind({});
