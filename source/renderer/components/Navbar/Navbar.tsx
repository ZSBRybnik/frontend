import { useState } from "@hookstate/core";
import type { FC, PropsWithChildren } from "react";
import { useSpring } from "react-spring";
import NavbarButton from "~renderer/components/NavBarButton/NavbarButton";
import {
  NavbarElements,
  NavbarMenu,
  StyledNavbarComponent,
} from "./Navbar.styles";

const Navbar: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const isOpenState = useState(false);

  const animatedMenu = useSpring({
    transform: isOpenState.get() ? "translateX(0%)" : "translateX(-100%)",
  });

  return (
    <>
      <StyledNavbarComponent>
        <NavbarButton
          icon={isOpenState.get() ? "\uE00E" : "\uE00F"}
          onClick={() => isOpenState.set(!isOpenState.get())}
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
