import type { Meta, StoryFn } from "@storybook/react";
import type { FunctionComponent } from "react";
import Code from "~frontend/source/renderer/components/Code/Code";
import type CodeProperties from "~frontend/source/renderer/components/Code/Code.types";

export default {
  title: "Code",
  component: Code,
} as Meta<typeof Code>;

const Template: StoryFn<FunctionComponent<CodeProperties>> = ({
  ...rest
}: CodeProperties): JSX.Element => {
  return <Code {...rest} />;
};

export const CodeExample: StoryFn<typeof Code> = Template.bind({});

CodeExample.args = {
  language: "ts",
  children: "const example: number = 12;",
};
