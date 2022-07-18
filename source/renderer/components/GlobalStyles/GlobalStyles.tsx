import { css, Global, Theme, useTheme } from "@emotion/react";
import type { FunctionComponent } from "react";
import { memo } from "react";

const GlobalStyle: FunctionComponent = (): JSX.Element => {
  const theme: Theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
        }
        body {
          font-family: "Roboto", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: ${theme.background};
          color: ${theme.color};
        }
        #root {
          display: flex;
          @media (max-width: 768px) {
            flex-direction: column-reverse;
          }

          flex-direction: column;
          min-height: 100vh;
          overflow: hidden;
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
