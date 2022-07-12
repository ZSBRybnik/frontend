import styled from "@emotion/styled";
import { animated } from "react-spring";

export const StyledNavbarComponent = styled.nav`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  height: 50px;
  background-color: #e05415;
`;

export const NavbarElements = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  flex: 1;
`;

export const NavbarMenu = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #e05415;
  z-index: 2;
`;
