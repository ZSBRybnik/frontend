import { FC } from "react";
import Icon from "~renderer/components/Icon/Icon";
import StyledNavbarButton from "./NavbarButton.styles";

type NavbarButtonProps = {
  icon: string;
};

const NavbarButton: FC<NavbarButtonProps> = ({
  icon,
  ...rest
}): JSX.Element => {
  return (
    <StyledNavbarButton {...rest}>
      <Icon>{icon}</Icon>
    </StyledNavbarButton>
  );
};

export default NavbarButton;
