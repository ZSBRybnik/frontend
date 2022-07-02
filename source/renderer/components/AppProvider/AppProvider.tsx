import { ThemeProvider } from "@emotion/react";
import { FunctionComponent, PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

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
