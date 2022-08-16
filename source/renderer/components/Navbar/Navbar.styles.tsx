import styled from "@emotion/styled";
import target, { TargetType } from "~shared/constants/target/target";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 5px;
  height: 50px;
  width: 100%;
  background-color: ${({ theme: { accent } }) => accent};
  -webkit-app-region: ${target === TargetType.Desktop ? "drag" : "no-drag"};
`;

export default StyledNavbar;
