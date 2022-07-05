import { ThemeProvider } from "@emotion/react";
import type { FunctionComponent, PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

const AppProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <ThemeProvider theme={{}}>
      <HelmetProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
