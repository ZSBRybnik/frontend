import { ThemeProvider as ThemeProviderBase } from "@emotion/react";
import themes from "~frontend/source/renderer/constants/themes/themes";
import {
  ThemeProviderComponent,
  ThemeProviderProperties,
} from "./theme-provider.types";

const ThemeProvider: ThemeProviderComponent = ({
  children,
}: ThemeProviderProperties): JSX.Element => {
  return (
    <ThemeProviderBase theme={themes["light"]}>{children}</ThemeProviderBase>
  );
};

export default ThemeProvider;
