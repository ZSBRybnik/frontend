import styled from "@emotion/styled";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 5px;
  height: 50px;
  width: 100%;
  background-color: ${({ theme: { accent } }) => accent};
`;

export default StyledNavbar;
