import { ThemeProvider } from "@emotion/react";
import type { FunctionComponent, PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import MotionProvider from "~renderer/components/MotionProvider/MotionProvider";
import themes from "~renderer/Constans/Themes/themes";

const AppProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return (
    <ThemeProvider theme={themes["dark"]}>
      <HelmetProvider>
        <MotionProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </MotionProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
