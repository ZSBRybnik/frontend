import type { FunctionComponent } from "react";
import StyledNavbarButton from "./NavbarButton.styles";
import type NavBarButtonProps from "./NavbarButton.types";

const NavbarButton: FunctionComponent<NavBarButtonProps> = ({
  children,
  ...rest
}): JSX.Element => {
  return <StyledNavbarButton {...rest}>{children}</StyledNavbarButton>;
};

export default NavbarButton;
