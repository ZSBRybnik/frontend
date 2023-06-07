import type { Meta, StoryFn } from "@storybook/react";
import type { FunctionComponent } from "react";
import GlobalStyle from "~frontend/source/renderer/components/GlobalStyles/GlobalStyles";
import Katex from "~frontend/source/renderer/components/Katex/Katex";
import type KatexProperties from "~frontend/source/renderer/components/Katex/Katex.types";

export default {
  title: "Katex",
  component: Katex,
} as Meta<typeof Katex>;

const Template: StoryFn<FunctionComponent<KatexProperties>> = ({
  ...rest
}: KatexProperties): JSX.Element => {
  return (
    <>
      <GlobalStyle isStorybook />
      <Katex {...rest} />
    </>
  );
};

export const KatexExample: StoryFn<typeof Katex> = Template.bind({});

KatexExample.args = {
  children: "c = \\pm\\sqrt{a^2 + b^2}",
};
