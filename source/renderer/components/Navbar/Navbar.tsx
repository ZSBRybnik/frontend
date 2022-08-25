import { useState } from "@hookstate/core";
import { FunctionComponent } from "react";
import Icon from "~renderer/components/Icon/Icon";
import NavbarButton from "~renderer/components/NavbarButton/NavbarButton";
import NavbarMenu from "~renderer/components/NavbarMenu/NavbarMenu";
import ExtendedWindow from "~root/source/shared/types/extendedWindow/extendedWindow";
import target, { TargetType } from "~shared/constants/target/target";
import StyledNavbar, {
  StyledNavbarCenter,
  StyledNavbarLeft,
  StyledNavbarRight,
} from "./Navbar.styles";

const NavBar: FunctionComponent = (): JSX.Element => {
  const isOpenState = useState(false);

  const toggleIsOpen = () => {
    isOpenState.set(!isOpenState.get());
  };

  return (
    <>
      <StyledNavbar>
        <StyledNavbarLeft>
          <NavbarButton onClick={toggleIsOpen}>
            <Icon>&#xE700;</Icon>
          </NavbarButton>
          <NavbarButton>
            <Icon>&#xE77B;</Icon>
          </NavbarButton>
        </StyledNavbarLeft>
        <StyledNavbarCenter>
          <NavbarButton>
            <Icon>&#xE77B;</Icon>
          </NavbarButton>
        </StyledNavbarCenter>
        {target === TargetType.Desktop && (
          <StyledNavbarRight>
            <NavbarButton>
              <Icon>&#xE16A;</Icon>
            </NavbarButton>
            <NavbarButton>
              <Icon>&#xE158;</Icon>
            </NavbarButton>
            <NavbarButton
              onClick={() => {
                const api = (window as ExtendedWindow).api;
                console.log(api);
                api?.close();
              }}
            >
              <Icon>&#xE10A;</Icon>KURWA TERAZ
            </NavbarButton>
          </StyledNavbarRight>
        )}
      </StyledNavbar>
      <NavbarMenu isOpen={isOpenState.get()} />
    </>
  );
};

export default NavBar;
