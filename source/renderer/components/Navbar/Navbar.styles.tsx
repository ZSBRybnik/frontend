import styled from "@emotion/styled";
import target, {
  TargetType,
} from "~frontend/source/shared/constants/target/target";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
  width: 100%;
  background-color: ${({ theme: { accent } }) => accent};
  -webkit-app-region: ${target === TargetType.Desktop ? "drag" : "no-drag"};
  position: relative;
  z-index: 2;
`;

export const StyledNavbarLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  flex: 1;
  height: 100%;
  padding: 5px;
`;

export const StyledNavbarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  flex: 1;
  height: 100%;
  padding: 5px;
`;

export const StyledNavbarCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex: 1;
  height: 100%;
  padding: 5px;
`;

export default StyledNavbar;
