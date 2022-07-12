import { Theme } from "@emotion/react";
import { StyledComponent } from "@emotion/styled";
import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";
import { AnimatedProps } from "react-spring";

export type AnimatedLoaderComponent = StyledComponent<
  AnimatedProps<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  >
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
