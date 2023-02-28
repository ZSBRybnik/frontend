import Mode from "../../types/mode/mode";
import getTargetVersion from "../../utils/getTargetVersion/getTargetVersion";

type GetBabelLoaderArguments = {
  targetToModern: boolean;
  mode: Mode;
};

const getBabelLoader = ({ targetToModern, mode }: GetBabelLoaderArguments) => {
  return {
    presets: [
      [
        "@babel/env",
        {
          targets: getTargetVersion({ targetToModern }),
          bugfixes: true,
          useBuiltIns: "usage",
          corejs: "3",
        },
      ],
      "@babel/preset-typescript",
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
          development: mode === Mode.Development,
          importSource:
            mode === Mode.Development
              ? "@welldone-software/why-did-you-render"
              : undefined,
        },
      ],
    ],
    plugins: [
      "universal-import",
      "vuera/babel",
      "inline-react-svg",
      "@emotion",
      targetToModern &&
        mode === "development" &&
        require.resolve("react-refresh/babel"),
    ].filter(Boolean),
  };
};

export default getBabelLoader;
