import { css, Global, Theme, useTheme } from "@emotion/react";
import type { FunctionComponent } from "react";
import { memo } from "react";

const GlobalStyles: FunctionComponent = (): JSX.Element => {
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
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #fff;
        }
        ::-webkit-scrollbar-thumb {
          background: #e05415;
        }
        body {
          font-family: "Roboto", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background: #fffff00;
          color: ${theme.color};
        }
        #root {
          background: ${theme.background};
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          overflow: hidden;
          border-radius: 15px; /* tylko na windows 11 i macos */
        }
        @font-face {
          font-family: "Segoe Fluent Icons";
          src: local("Segoe Fluent Icons") url("./fonts/Segoe Fluent Icons.ttf")
            format("truetype");
        }
      `}
    />
  );
};

export default memo(GlobalStyles);
