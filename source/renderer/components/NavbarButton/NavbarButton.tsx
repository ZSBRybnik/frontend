import AddIcon from "@fluentui/svg-icons/icons/add_20_filled.svg";
import type { FunctionComponent, PropsWithChildren } from "react";
import StyledNavbarButton from "./NavbarButton.styles";

const NavbarButton: FunctionComponent<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <StyledNavbarButton>
      {children}
      <AddIcon />
    </StyledNavbarButton>
  );
};

export default NavbarButton;
