import type { FC, PropsWithChildren } from "react";
// eslint-disable-next-line no-restricted-imports
import { useState } from "react";
import { useSpring } from "react-spring";
import NavbarButton from "~renderer/components/NavBarButton/NavbarButton";
import {
  NavbarElements,
  NavbarMenu,
  StyledNavbarComponent,
} from "./Navbar.styles";

const Navbar: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const animatedMenu = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
  });

  return (
    <>
      <StyledNavbarComponent>
        <NavbarButton
          icon={isOpen ? "\uE00E" : "\uE00F"}
          onClick={() => setIsOpen(!isOpen)}
        />
        <NavbarElements>{children}</NavbarElements>
      </StyledNavbarComponent>
      <NavbarMenu style={animatedMenu}>
        <span>Menu</span>
      </NavbarMenu>
    </>
  );
};

export default Navbar;
