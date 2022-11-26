import { FunctionComponent } from "react";
import Icon from "~frontend/source/renderer/components/Icon/Icon";
import NavbarButton from "~frontend/source/renderer/components/NavbarButton/NavbarButton";
import target, {
  TargetType,
} from "~frontend/source/shared/constants/target/target";
import ExtendedWindow from "~frontend/source/shared/types/extendedWindow/extendedWindow";
import StyledNavbar, {
  StyledNavbarCenter,
  StyledNavbarLeft,
  StyledNavbarRight,
} from "./Navbar.styles";
import useIsSlideOutMenuOpenStore from "../../stores/isSlideOutMenuOpenStore/isSlideOutMenuOpenStore";

const NavBar: FunctionComponent = (): JSX.Element => {
  const { value: isSlideOutMenuOpen, setValue: setIsSlideOutMenuOpen } =
    useIsSlideOutMenuOpenStore();
  const toggleIsOpen = () => {
    setIsSlideOutMenuOpen(!isSlideOutMenuOpen);
  };

  return (
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
          <NavbarButton
            onClick={() => {
              (window as ExtendedWindow).api?.minimize();
            }}
          >
            <Icon>&#xE16A;</Icon>
          </NavbarButton>
          <NavbarButton
            onClick={() => {
              (window as ExtendedWindow).api?.toggleMaximize();
            }}
          >
            <Icon>&#xE158;</Icon>
          </NavbarButton>
          <NavbarButton
            onClick={() => {
              (window as ExtendedWindow).api?.close();
            }}
          >
            <Icon>&#xE10A;</Icon>
          </NavbarButton>
        </StyledNavbarRight>
      )}
    </StyledNavbar>
  );
};

export default NavBar;
