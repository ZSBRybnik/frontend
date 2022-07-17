import { Theme } from "@emotion/react";
import { StyledComponent } from "@emotion/styled";
import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";

export type AnimatedLoaderComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

export type LoaderWrapperComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;
export type StyledLoaderComponent = LoaderWrapperComponent;
