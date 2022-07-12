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
    width: isOpen ? "250px" : "0px",
  });

  return (
    <>
      <StyledNavbarComponent>
        <NavbarButton icon="&#xE700;" onClick={() => setIsOpen(!isOpen)} />
        <NavbarElements>{children}</NavbarElements>
      </StyledNavbarComponent>
      <NavbarMenu style={animatedMenu} onMouseLeave={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
