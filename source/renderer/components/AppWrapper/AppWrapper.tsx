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
} from "../private-route/private-route";
import useErrorBoundary from "use-error-boundary";
import Buffet from "../../pages/Buffet/Buffet";
import Roles from "~backend/source/server/constants/roles/Roles";
import Overlay from "../Overlay/Overlay";
import SlideOutMenu from "../SlideOutMenu/SlideOutMenu";
import useWindowDimensionsListener from "../../hooks/useWindowDimensionsListener/useWindowDimensionsListener";

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

const Panel: LazyExoticComponent<FunctionComponent> = lazy(
  (): Promise<typeof import("~frontend/source/renderer/pages/Panel/Panel")> => {
    return new Promise((resolve) => {
      resolve(import("~frontend/source/renderer/pages/Panel/Panel"));
    });
  },
);

const AppWrapper: FunctionComponent = () => {
  const { ErrorBoundary } = useErrorBoundary();
  useCopy();
  useNetwork();
  useQuitShortcut();
  useMinimizeShortcut();
  useToggleMaximizeShortcut();
  useToggleFullscreenShortcut();
  useIpfs();
  useWindowDimensionsListener();
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Overlay />
        <NavBar />
        <SlideOutMenu />
        <MainSection>
          <MainSectionContent>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/post/:id" element={<Post />} />
              <Route
                path="/buffet"
                element={
                  <PrivateRoute
                    noAccessAction={
                      PrivateRouteRedirectActions.RedirectToLoginPage
                    }
                    whitelist={
                      new Set([
                        Roles.Administrator,
                        Roles.BuffetOwner,
                        Roles.Student,
                      ])
                    }
                    element={<Buffet />}
                  />
                }
              />
              <Route
                path="/panel"
                element={
                  <PrivateRoute
                    noAccessAction={
                      PrivateRouteRedirectActions.RedirectToPageNotFound
                    }
                    whitelist={new Set([Roles.Administrator])}
                    element={<Panel />}
                  />
                }
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
    </ErrorBoundary>
  );
};

export default AppWrapper;
