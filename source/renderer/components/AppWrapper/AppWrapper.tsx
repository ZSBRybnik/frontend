import type { FunctionComponent, LazyExoticComponent } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "~renderer/components/GlobalStyles/GlobalStyles";
import Loader from "~renderer/components/Loader/Loader";
import NavBar from "~renderer/components/Navbar/Navbar";
import useCopy from "../../hooks/useCopy/useCopy";
import useNetwork from "../../hooks/useNetwork/useNetwork";

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

const AppWrapper: FunctionComponent = () => {
  useCopy();
  useNetwork();
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:name" element={<Subpage />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppWrapper;
