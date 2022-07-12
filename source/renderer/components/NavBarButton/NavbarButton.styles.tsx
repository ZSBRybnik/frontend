import styled from "@emotion/styled";

const StyledNavbarButton = styled.div`
  display: grid;
  place-items: center;
  color: #fff;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
  font-size: 20px;
  transition: background-color 200ms;
  z-index: 3;
  user-select: none;
  &:hover {
    background-color: #00000033;
  }
`;

export default StyledNavbarButton;
