import { ThemeProvider } from "@emotion/react";
import type { FunctionComponent, PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import MotionProvider from "../MotionProvider/MotionProvider";

const AppProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return (
    <ThemeProvider theme={{}}>
      <HelmetProvider>
        <MotionProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </MotionProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
