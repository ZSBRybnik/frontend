import styled from "@emotion/styled";

const StyledNavbarButton = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
  user-select: none;
  font-size: 18px;
  transition: background-color 200ms;
  &:hover {
    background-color: ${({ theme: { hover } }) => hover};
  }
  &:active {
    background-color: ${({ theme: { active } }) => active};
  }
`;

export default StyledNavbarButton;
