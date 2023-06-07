import {
  css,
  Global,
  useTheme,
  type SerializedStyles,
  type Theme,
} from "@emotion/react";
import { memo, useMemo, type FunctionComponent } from "react";
import useOperatingSystemViewportAdjustments from "../../hooks/useOperatingSystemViewportAdjustments/useOperatingSystemViewportAdjustments";

export type GlobalStylesProperties = {
  isStorybook?: boolean;
};

const GlobalStyles: FunctionComponent<GlobalStylesProperties> = ({
  isStorybook,
}: GlobalStylesProperties): JSX.Element => {
  const { background, color }: Theme = useTheme();
  const { rounded } = useOperatingSystemViewportAdjustments();
  const rootStyles: SerializedStyles = useMemo((): SerializedStyles => {
    const styles: SerializedStyles = css`
      background: ${background};
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      overflow: hidden;
      ${rounded &&
      css`
        border-radius: 15px;
      `};
      a {
        text-decoration: none;
      }
    `;
    return isStorybook
      ? styles
      : css`
          #root {
            ${styles}
          }
        `;
  }, [background, isStorybook]);
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
          background: #ffffff00;
          color: ${color};
          ${rootStyles}
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
