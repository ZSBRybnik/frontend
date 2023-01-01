import type { FunctionComponent, PropsWithChildren } from "react";
import { Suspense } from "react";
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
//import useErrorBoundary from "use-error-boundary";
import Overlay from "../Overlay/Overlay";
import SlideOutMenu from "../SlideOutMenu/SlideOutMenu";
//import useWindowDimensionsListener from "../../hooks/useWindowDimensionsListener/useWindowDimensionsListener";
import useJwtDecodeTokenOnChange from "../../hooks/useJwtDecodeTokenOnChange/useJwtDecodeTokenOnChange";
import Loader from "../Loader/Loader";
import NavBar from "../Navbar/Navbar";
import GlobalStyle from "~frontend/source/renderer/components/GlobalStyles/GlobalStyles";

const AppWrapper: FunctionComponent<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  //const { ErrorBoundary } = useErrorBoundary();
  useCopy();
  useNetwork();
  useQuitShortcut();
  useMinimizeShortcut();
  useToggleMaximizeShortcut();
  useToggleFullscreenShortcut();
  useIpfs();
  //useWindowDimensionsListener();
  useJwtDecodeTokenOnChange();
  return (
    //<ErrorBoundary>
    <>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Overlay />
        <NavBar />
        <SlideOutMenu />
        <MainSection>
          <MainSectionContent>
            {children}
            <Presentation />
          </MainSectionContent>
          <BottomSpacer />
          <BottomNavbar />
        </MainSection>
      </Suspense>
    </>
    //</ErrorBoundary>
  );
};

export default AppWrapper;

/*
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
                  <Panel />
                }
              />
              <Route
                path="/panel/administrate-users"
                element={
                  <PrivateRoute
                    noAccessAction={
                      PrivateRouteRedirectActions.RedirectToPageNotFound
                    }
                    whitelist={new Set([Roles.Administrator])}
                    element={<Panel />}
                  />
                  <AdministrateUsers />
                }
              />
              <Route path="/:name" element={<Subpage />} />
              <Route path="*" element={<>404</>} />
            </Routes>
            */
