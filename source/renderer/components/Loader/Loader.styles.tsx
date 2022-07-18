import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  AnimatedLoaderComponent,
  LoaderWrapperComponent,
  StyledLoaderComponent,
} from "./Loader.types";

export const StyledLoader: StyledLoaderComponent = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const LoaderWrapper: LoaderWrapperComponent = styled.div`
  width: min(30%, 150px);
  height: 0.6rem;
  background-color: ${({ theme: { loader } }) => loader};
  border-radius: 1rem;
  overflow: hidden;
`;

export const AnimatedLoader: AnimatedLoaderComponent = styled(motion.div)`
  height: 100%;
  border-radius: 1rem;
  background-color: ${({ theme: { accent } }) => accent};
` as AnimatedLoaderComponent;
