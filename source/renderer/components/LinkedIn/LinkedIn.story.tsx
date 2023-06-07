import type { Meta, StoryFn } from "@storybook/react";
import type { FunctionComponent } from "react";
import GlobalStyle from "~frontend/source/renderer/components/GlobalStyles/GlobalStyles";
import LinkedIn from "~frontend/source/renderer/components/LinkedIn/LinkedIn";
import type CodeProperties from "~frontend/source/renderer/components/LinkedIn/LinkedIn.types";

export default {
  title: "LinkedIn",
  component: LinkedIn,
} as Meta<typeof LinkedIn>;

const Template: StoryFn<FunctionComponent<CodeProperties>> = ({
  ...rest
}: CodeProperties): JSX.Element => {
  return (
    <>
      <GlobalStyle isStorybook />
      <LinkedIn {...rest} />
    </>
  );
};

export const LinkedInExample: StoryFn<typeof LinkedIn> = Template.bind({});

LinkedInExample.args = {
  url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7072100467303931904",
};
