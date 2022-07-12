import type { FunctionComponent, LazyExoticComponent } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "~renderer/components/GlobalStyles/GlobalStyles";
import Loader from "~renderer/components/Loader/Loader";
import Nav from "~renderer/components/Nav/Nav";

const Homepage: LazyExoticComponent<FunctionComponent> = lazy(
  (): Promise<typeof import("~renderer/pages/Homepage")> => {
    return new Promise((resolve) => {
      resolve(import("~renderer/pages/Homepage"));
    });
  },
);

const AppWrapper: FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </Nav>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppWrapper;
