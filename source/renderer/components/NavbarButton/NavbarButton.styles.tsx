import styled from "@emotion/styled";

const StyledNavbarButton = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
  user-select: none;
  color: #fff;
  transition: background-color 200ms;
  -webkit-app-region: no-drag;
  &:hover {
    background-color: #ffffff22;
  }
  &:active {
    background-color: #ffffff11;
  }
`;

export default StyledNavbarButton;
