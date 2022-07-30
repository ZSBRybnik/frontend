import { useState } from "@hookstate/core";
import { FunctionComponent } from "react";
import Icon from "~renderer/components/Icon/Icon";
import NavbarButton from "~renderer/components/NavbarButton/NavbarButton";
import NavbarMenu from "~renderer/components/NavbarMenu/NavbarMenu";
import StyledNavbar from "./Navbar.styles";

const NavBar: FunctionComponent = (): JSX.Element => {
  const isOpenState = useState(false);

  const toggleIsOpen = () => {
    isOpenState.set(!isOpenState.get());
  };

  return (
    <>
      <StyledNavbar>
        <NavbarButton onClick={toggleIsOpen}>
          <Icon>&#xE700;</Icon>
        </NavbarButton>
        <NavbarButton>
          <Icon>&#xE77B;</Icon>
        </NavbarButton>
      </StyledNavbar>
      <NavbarMenu isOpen={isOpenState.get()} />
    </>
  );
};

export default NavBar;
