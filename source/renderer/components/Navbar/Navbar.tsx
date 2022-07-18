import type { FunctionComponent } from "react";
import NavbarButton from "~renderer/components/NavbarButton/NavbarButton";
import StyledNavbar from "./Navbar.styles";

const NavBar: FunctionComponent = (): JSX.Element => {
  return (
    <StyledNavbar
      layout
      transition={{ type: "spring", stiffness: 700, damping: 30 }}
    >
      <NavbarButton />
    </StyledNavbar>
  );
};

export default NavBar;
