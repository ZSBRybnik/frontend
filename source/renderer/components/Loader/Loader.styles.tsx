import styled from "@emotion/styled";
import { animated } from "react-spring";
import {
  AnimatedLoaderComponent,
  LoaderWrapperComponent,
  StyledLoaderComponent,
} from "./Loader.types";

export const StyledLoader: StyledLoaderComponent = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  outline: 1px solid red;
`;

export const LoaderWrapper: LoaderWrapperComponent = styled.div`
  width: min(30%, 150px);
  height: 0.6rem;
  background-color: #ccc;
  border-radius: 1rem;
  overflow: hidden;
`;

export const AnimatedLoader: AnimatedLoaderComponent = styled(animated.div)`
  height: 100%;
  border-radius: 1rem;
  background-color: #e05415;
` as AnimatedLoaderComponent;
