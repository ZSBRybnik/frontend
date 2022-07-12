import type { FC, PropsWithChildren } from "react";
import { StyledNavComponent } from "./Nav.styles";

const Nav: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <StyledNavComponent>{children}</StyledNavComponent>;
};

export default Nav;
