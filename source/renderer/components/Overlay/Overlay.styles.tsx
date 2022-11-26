import styled from "@emotion/styled";

type OverlayProperties = {
  isSlideOutMenuOpen: boolean;
};

export const OverlayWrapper = styled.div<OverlayProperties>`
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: 0.15;
  display: ${({ isSlideOutMenuOpen }: OverlayProperties): string =>
    isSlideOutMenuOpen ? "block" : "none"};
  position: fixed;
  z-index: 1;
`;
