import type { FunctionComponent, LazyExoticComponent } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "~renderer/components/GlobalStyles/GlobalStyles";
import Loader from "~renderer/components/Loader/Loader";
import NavBar from "~renderer/components/Navbar/Navbar";
import useCopy from "../../hooks/useCopy/useCopy";
import useIpfs from "../../hooks/useIpfs/useIpfs";
import useNetwork from "../../hooks/useNetwork/useNetwork";
import Presentation from "../Presentation/Presentation";
import { MainSection, MainSectionContent } from "./AppWrapper.styles";

const Homepage: LazyExoticComponent<FunctionComponent> = lazy(
  (): Promise<typeof import("~renderer/pages/Homepage")> => {
    return new Promise((resolve) => {
      resolve(import("~renderer/pages/Homepage"));
    });
  },
);

const Subpage: LazyExoticComponent<FunctionComponent> = lazy(
  (): Promise<typeof import("~renderer/pages/Subpage")> => {
    return new Promise((resolve) => {
      resolve(import("~renderer/pages/Subpage"));
    });
  },
);

const Post: LazyExoticComponent<FunctionComponent> = lazy(
  (): Promise<typeof import("~renderer/pages/Post")> => {
    return new Promise((resolve) => {
      resolve(import("~renderer/pages/Post"));
    });
  },
);

const AppWrapper: FunctionComponent = () => {
  useCopy();
  useNetwork();
  useIpfs();
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Suspense fallback={<Loader />}>
        <MainSection>
          <MainSectionContent>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/:name" element={<Subpage />} />
              <Route path="*" element={<>404</>} />
            </Routes>
            <Presentation />
          </MainSectionContent>
        </MainSection>
      </Suspense>
    </>
  );
};

export default AppWrapper;
