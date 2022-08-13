import type { FunctionComponent } from "react";
import StyledNavbarMenu from "./NavbarMenu.style";
import type NavbarMenuProps from "./NavbarMenu.types";

const NavbarMenu: FunctionComponent<NavbarMenuProps> = ({
  isOpen,
}): JSX.Element => {
  console.log(isOpen);
  return (
    <StyledNavbarMenu
    //animate={{ left: isOpen ? "-300px" : "0", opacity: isOpen ? 0 : 1 }}
    //initial={{ left: "-300px", opacity: 0 }}
    //transition={{ type: "spring", stiffness: 250, damping: 30, mass: 0.5 }}
    >
      MENU
    </StyledNavbarMenu>
  );
};

export default NavbarMenu;
