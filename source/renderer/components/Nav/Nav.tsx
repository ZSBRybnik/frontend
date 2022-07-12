import type { FC, PropsWithChildren } from "react";
import { StyledNav } from "./Nav.styles";

const Nav: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <StyledNav>{children}</StyledNav>;
};

export default Nav;
