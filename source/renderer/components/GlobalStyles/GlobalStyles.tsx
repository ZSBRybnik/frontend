import { css, Global } from "@emotion/react";
import type { FunctionComponent } from "react";
import { memo } from "react";

const GlobalStyle: FunctionComponent = (): JSX.Element => {
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
        }
        #root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          overflow: hidden;
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
