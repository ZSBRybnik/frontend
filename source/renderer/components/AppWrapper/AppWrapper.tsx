import type { FunctionComponent, LazyExoticComponent } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "~frontend/source/renderer/components/GlobalStyles/GlobalStyles";
import Loader from "~frontend/source/renderer/components/Loader/Loader";
import NavBar from "~frontend/source/renderer/components/Navbar/Navbar";
import useCopy from "../../hooks/useCopy/useCopy";
import useMinimizeShortcut from "../../hooks/useMinimizeShortcut/useMinimizeShortcut";
import useNetwork from "../../hooks/useNetwork/useNetwork";
import useQuitShortcut from "../../hooks/useQuitShortcut/useQuitShortcut";
import Presentation from "../Presentation/Presentation";
import { MainSection, MainSectionContent } from "./AppWrapper.styles";
import useToggleFullscreenShortcut from "../../hooks/useToggleFullscreenShortcut/useToggleFullscreenShortcut";
import useToggleMaximizeShortcut from "../../hooks/useToggleMaximizeShortcut/useToggleMaximizeShortcut";
import BottomNavbar from "../BottomNavbar/BottomNavbar";
import BottomSpacer from "../BottomSpacer/BottomSpacer";
import useIpfs from "../../hooks/useIpfs/useIpfs";
import PrivateRoute, {
  PrivateRouteRedirectActions,
} from "../PrivateRoute/PrivateRoute";
import Buffet from "../../pages/Buffet/Buffet";
import Roles from "~backend/source/server/constants/roles/Roles";

const Homepage: LazyExoticComponent<FunctionComponent> = lazy(
  (): Promise<typeof import("~frontend/source/renderer/pages/Homepage")> => {
    return new Promise((resolve) => {
      resolve(import("~frontend/source/renderer/pages/Homepage"));
    });
  },
);

const Subpage: LazyExoticComponent<FunctionComponent> = lazy(
  (): Promise<typeof import("~frontend/source/renderer/pages/Subpage")> => {
    return new Promise((resolve) => {
      resolve(import("~frontend/source/renderer/pages/Subpage"));
    });
  },
);

const Post: LazyExoticComponent<FunctionComponent> = lazy(
  (): Promise<typeof import("~frontend/source/renderer/pages/Post")> => {
    return new Promise((resolve) => {
      resolve(import("~frontend/source/renderer/pages/Post"));
    });
  },
);

const AppWrapper: FunctionComponent = () => {
  useCopy();
  useNetwork();
  useQuitShortcut();
  useMinimizeShortcut();
  useToggleMaximizeShortcut();
  useToggleFullscreenShortcut();
  useIpfs();
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <NavBar />
        <MainSection>
          <MainSectionContent>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/post/:id" element={<Post />} />
              <PrivateRoute
                path="/buffet"
                noAccessAction={PrivateRouteRedirectActions.RedirectToLoginPage}
                whitelist={
                  new Set([
                    Roles.Administrator,
                    Roles.BuffetOwner,
                    Roles.Student,
                  ])
                }
                element={<Buffet />}
              />
              <Route path="/:name" element={<Subpage />} />
              <Route path="*" element={<>404</>} />
            </Routes>
            <Presentation />
          </MainSectionContent>
          <BottomSpacer />
          <BottomNavbar />
        </MainSection>
      </Suspense>
    </>
  );
};

export default AppWrapper;
