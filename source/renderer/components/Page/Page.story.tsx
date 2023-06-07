import type { Meta, StoryFn } from "@storybook/react";
import type { FunctionComponent } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "~frontend/source/renderer/components/GlobalStyles/GlobalStyles";
import Page from "~frontend/source/renderer/components/Page/Page";
import type PageProperties from "~frontend/source/renderer/components/Page/Page.types";

export default {
  title: "Page",
  component: Page,
} as Meta<typeof Page>;

const Template: StoryFn<FunctionComponent<PageProperties>> = ({
  ...rest
}: PageProperties): JSX.Element => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GlobalStyle isStorybook />
        <Page {...rest} />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export const PageExample: StoryFn<typeof Page> = Template.bind({});

PageExample.args = {
  title: "Example page",
  children: "Example content",
};
