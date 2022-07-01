import styled from "@emotion/styled";
import { animated } from "react-spring";

export const StyledLoader = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  aspect-ratio: 1;
`;

export const AnimatedLoader = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 4px solid #e05415;
`;
