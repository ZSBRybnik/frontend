import { Routes, Route } from "react-router-dom";
import { FunctionComponent, lazy, LazyExoticComponent, Suspense } from "react";
import GlobalStyle from "~renderer/components/GlobalStyles/GlobalStyles";
import Loader from "~renderer/components/Loader/Loader";

const Homepage: LazyExoticComponent<FunctionComponent> = lazy(
  (): Promise<typeof import("~renderer/pages/Homepage")> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("~renderer/pages/Homepage"));
      }, 5000);
    });
  }
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
