import type { ComponentMeta, ComponentStory } from "@storybook/react";
import type { FunctionComponent } from "react";
import Link from "~renderer/components/Link/Link";
import type LinkProperties from "~renderer/components/Link/Link.types";

export default {
  title: "Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<FunctionComponent<LinkProperties>> = ({
  children,
  ...rest
}: LinkProperties): JSX.Element => {
  return <Link {...rest}>{children}</Link>;
};

export const LinkExample: ComponentStory<typeof Link> = Template.bind({});

LinkExample.args = {
  children: "Google.com",
  href: "https://google.com",
};

export const InsecureLinkExample: ComponentStory<typeof Link> = Template.bind(
  {},
);

InsecureLinkExample.args = {
  children: "Google.com",
  href: "https://google.com",
  insecure: true,
};
