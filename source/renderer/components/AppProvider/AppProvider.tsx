import { FunctionComponent, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";

const AppProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={{}}>
      <HelmetProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
