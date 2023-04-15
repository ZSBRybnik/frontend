import type { FunctionComponent, LazyExoticComponent } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import useErrorBoundary from "use-error-boundary";
import Roles from "~backend/source/server/constants/roles/Roles";
import GlobalStyle from "~frontend/source/renderer/components/GlobalStyles/GlobalStyles";
import Loader from "~frontend/source/renderer/components/Loader/Loader";
import NavBar from "~frontend/source/renderer/components/Navbar/Navbar";
import useCopy from "../../hooks/useCopy/useCopy";
import useIpfs from "../../hooks/useIpfs/useIpfs";
import useJwtDecodeTokenOnChange from "../../hooks/useJwtDecodeTokenOnChange/useJwtDecodeTokenOnChange";
import useMinimizeShortcut from "../../hooks/useMinimizeShortcut/useMinimizeShortcut";
import useNetwork from "../../hooks/useNetwork/useNetwork";
import useQuitShortcut from "../../hooks/useQuitShortcut/useQuitShortcut";
import useToggleFullscreenShortcut from "../../hooks/useToggleFullscreenShortcut/useToggleFullscreenShortcut";
import useToggleMaximizeShortcut from "../../hooks/useToggleMaximizeShortcut/useToggleMaximizeShortcut";
import useWindowDimensionsListener from "../../hooks/useWindowDimensionsListener/useWindowDimensionsListener";
import Buffet from "../../pages/Buffet/Buffet";
import BottomNavbar from "../BottomNavbar/BottomNavbar";
import BottomSpacer from "../BottomSpacer/BottomSpacer";
import Overlay from "../Overlay/Overlay";
import Presentation from "../Presentation/Presentation";
import PrivateRoute, {
  PrivateRouteRedirectActions,
} from "../private-route/private-route";
import SlideOutMenu from "../SlideOutMenu/SlideOutMenu";
import { MainSection, MainSectionContent } from "./AppWrapper.styles";

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

const AdministrateUsers: LazyExoticComponent<FunctionComponent> = lazy(
  (): Promise<
    typeof import("~frontend/source/renderer/pages/AdministrateUsers/AdministrateUsers")
  > => {
    return new Promise((resolve) => {
      resolve(
        import(
          "~frontend/source/renderer/pages/AdministrateUsers/AdministrateUsers"
        ),
      );
    });
  },
);

const Profile: LazyExoticComponent<FunctionComponent> = lazy(
  (): Promise<
    typeof import("~frontend/source/renderer/pages/Profile/Profile")
  > => {
    return new Promise((resolve) => {
      resolve(import("~frontend/source/renderer/pages/Profile/Profile"));
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
  useJwtDecodeTokenOnChange();
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
              <Route path="/profile/:name" element={<Profile />} />
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
                  /*<PrivateRoute
                    noAccessAction={
                      PrivateRouteRedirectActions.RedirectToPageNotFound
                    }
                    whitelist={new Set([Roles.Administrator])}
                    element={<Panel />}
                  />*/
                  <Panel />
                }
              />
              <Route
                path="/panel/administrate-users"
                element={
                  /*<PrivateRoute
                    noAccessAction={
                      PrivateRouteRedirectActions.RedirectToPageNotFound
                    }
                    whitelist={new Set([Roles.Administrator])}
                    element={<Panel />}
                  />*/
                  <AdministrateUsers />
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
