import type { Meta, StoryFn } from "@storybook/react";
import type { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "~frontend/source/renderer/components/GlobalStyles/GlobalStyles";
import Link from "~frontend/source/renderer/components/Link/Link";
import type LinkProperties from "~frontend/source/renderer/components/Link/Link.types";

export default {
  title: "Link",
  component: Link,
} as Meta<typeof Link>;

const Template: StoryFn<FunctionComponent<LinkProperties>> = ({
  children,
  ...rest
}: LinkProperties): JSX.Element => {
  return (
    <BrowserRouter>
      <GlobalStyle isStorybook />
      <Link {...rest}>{children}</Link>
    </BrowserRouter>
  );
};

export const LinkExample: StoryFn<typeof Link> = Template.bind({});

LinkExample.args = {
  children: "Google.com",
  href: "https://google.com",
};

export const InsecureLinkExample: StoryFn<typeof Link> = Template.bind({});

InsecureLinkExample.args = {
  children: "Google.com",
  href: "https://google.com",
  insecure: true,
};
