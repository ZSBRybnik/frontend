import { mdiRadio } from "@mdi/js";
import MdiIcon from "@mdi/react";
import { FunctionComponent } from "react";
import Icon from "~frontend/source/renderer/components/Icon/Icon";
import NavbarButton from "~frontend/source/renderer/components/NavbarButton/NavbarButton";
import target, {
  TargetType,
} from "~frontend/source/shared/constants/target/target";
import ExtendedWindow from "~frontend/source/shared/types/extendedWindow/extendedWindow";
import useIsSlideOutMenuOpenStore from "../../stores/isSlideOutMenuOpenStore/isSlideOutMenuOpenStore";
import useUserSettingsStore from "../../stores/userSettingsStore/userSettingsStore";
import StyledNavbar, {
  StyledNavbarLeft,
  StyledNavbarRight,
} from "./Navbar.styles";

const NavBar: FunctionComponent = (): JSX.Element => {
  const { value: isSlideOutMenuOpen, setValue: setIsSlideOutMenuOpen } =
    useIsSlideOutMenuOpenStore();
  const toggleIsOpen = () => {
    setIsSlideOutMenuOpen(!isSlideOutMenuOpen);
  };
  const {
    settings: { enableBroadcastCenter },
  } = useUserSettingsStore();
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
      <StyledNavbarRight>
        {enableBroadcastCenter && (
          <NavbarButton>
            <MdiIcon color="#fff" path={mdiRadio} size={1} />
          </NavbarButton>
        )}
        {target === TargetType.Desktop && (
          <>
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
          </>
        )}
      </StyledNavbarRight>
    </StyledNavbar>
  );
};

export default NavBar;
