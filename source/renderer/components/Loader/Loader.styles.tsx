import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";
import { animated, AnimatedProps } from "react-spring";

type LoaderDivElement = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

export const StyledLoader: LoaderDivElement = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  outline: 1px solid red;
`;

export const LoaderWrapper: LoaderDivElement = styled.div`
  width: min(30%, 150px);
  height: 0.6rem;
  background-color: #ccc;
  border-radius: 1rem;
  overflow: hidden;
`;

type AnimatedLoaderComponent = StyledComponent<
  AnimatedProps<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  >
>;

export const AnimatedLoader: AnimatedLoaderComponent = styled(animated.div)`
  height: 100%;
  border-radius: 1rem;
  background-color: #e05415;
` as AnimatedLoaderComponent;
