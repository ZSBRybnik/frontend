import type { Meta, StoryFn } from "@storybook/react";
import type { FunctionComponent } from "react";
import Albicla from "~frontend/source/renderer/components/Albicla/Albicla";
import type AlbiclaProperties from "~frontend/source/renderer/components/Albicla/Albicla.types";

export default {
  title: "Albicla",
  component: Albicla,
} as Meta<typeof Albicla>;

const Template: StoryFn<FunctionComponent<AlbiclaProperties>> = ({
  ...rest
}: AlbiclaProperties): JSX.Element => {
  return <Albicla {...rest} />;
};

export const AlbiclaExample: StoryFn<typeof Albicla> = Template.bind({});

AlbiclaExample.args = {
  url: "https://albiclaembed.com/post/1001450949?href=https://albicla.com/MateuszFarbis/post/1001450949",
};
