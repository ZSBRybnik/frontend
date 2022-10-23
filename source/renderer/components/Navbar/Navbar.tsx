import { FunctionComponent } from "react";
import Icon from "~frontend/source/renderer/components/Icon/Icon";
import NavbarButton from "~frontend/source/renderer/components/NavbarButton/NavbarButton";
import NavbarMenu from "~frontend/source/renderer/components/NavbarMenu/NavbarMenu";
import target, {
  TargetType,
} from "~frontend/source/shared/constants/target/target";
import ExtendedWindow from "~frontend/source/shared/types/extendedWindow/extendedWindow";
import StyledNavbar, {
  StyledNavbarCenter,
  StyledNavbarLeft,
  StyledNavbarRight,
} from "./Navbar.styles";
import useState from "~frontend/source/renderer/hooks/useState/useState";

const NavBar: FunctionComponent = (): JSX.Element => {
  const { value: isOpen, setValue: setIsOpen } = useState<{
    value: boolean;
  }>({ value: false });

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
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
      <NavbarMenu isOpen={isOpenState.get()} />
    </>
  );
};

export default NavBar;
