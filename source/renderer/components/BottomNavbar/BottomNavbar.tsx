import { Link } from "react-router-dom";
import ExternalLink from "../ExternalLink/ExternalLink";
import { BottomNavbarWrapper } from "./BottomNavbar.styles";
import { mdiTableSearch, mdiHome, mdiBookOpenPageVariant } from "@mdi/js";
import Icon from "@mdi/react";

const BottomNavbar = () => {
  return (
    <BottomNavbarWrapper>
      <ExternalLink href="https://uonetplus.vulcan.net.pl/rybnik">
        <Icon path={mdiBookOpenPageVariant} size={1.5} color="#fff" />
      </ExternalLink>
      <Link to="/">
        <Icon path={mdiHome} size={1.5} color="#fff" />
      </Link>
      <Link to="/lesson-plan">
        <Icon path={mdiTableSearch} size={1.5} color="#fff" />
      </Link>
    </BottomNavbarWrapper>
  );
};

export default BottomNavbar;
