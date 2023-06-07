import { PropsWithChildren, WeakValidationMap } from "react";

export type PageProperties = PropsWithChildren<{
  title?: string;
  noBackground?: boolean;
  noVerticalPadding?: boolean;
  defaultChildrenVerticalMargin?: number;
}>;

export type PageComponent = {
  (properties: PageProperties): JSX.Element;
  propTypes: WeakValidationMap<PageProperties>;
};

export default PageProperties;
