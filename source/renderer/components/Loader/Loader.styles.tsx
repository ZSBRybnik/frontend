import styled, { StyledComponent } from "@emotion/styled";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { animated, AnimatedProps } from "react-spring";

export const StyledLoader = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
`;

export const StyledLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  aspect-ratio: 1;
`;

type AnimatedLoaderComponent = StyledComponent<
  AnimatedProps<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  >
>;

export const AnimatedLoader: AnimatedLoaderComponent = styled(animated.div)`
  width: 15%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1vmin solid transparent;
  border-top: 1vmin solid #e05415;
` as AnimatedLoaderComponent;
