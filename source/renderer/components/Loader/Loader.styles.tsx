import styled from "@emotion/styled";
import { animated } from "react-spring";

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

export const AnimatedLoader = styled(animated.div)`
  width: 10%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #aaa;
  border-top: 8px solid #e05415;
`;
