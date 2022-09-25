import { MDXProvider as MDXProviderBase } from "@mdx-js/react";
import mdxComponentsMapper from "~frontend/source/renderer/constants/mdxComponentsMapper/mdxComponentsMapper";

import {
  MDXProviderComponent,
  MDXProviderProperties,
} from "./mdx-provider.types";

const MDXProvider: MDXProviderComponent = ({
  children,
}: MDXProviderProperties): JSX.Element => {
  return (
    <MDXProviderBase components={mdxComponentsMapper}>
      {children}
    </MDXProviderBase>
  );
};

export default MDXProvider;
