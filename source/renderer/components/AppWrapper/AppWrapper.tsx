import type { FunctionComponent, LazyExoticComponent } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "~renderer/components/GlobalStyles/GlobalStyles";
import Loader from "~renderer/components/Loader/Loader";

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
