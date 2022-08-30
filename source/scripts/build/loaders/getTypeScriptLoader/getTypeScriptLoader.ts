import { join } from "path";
import source from "~frontend/source/scripts/build/constants/source/source";
import Mode from "~frontend/source/scripts/build/types/mode/mode";
import getTargetVersion from "~frontend/source/scripts/build/utils/getTargetVersion/getTargetVersion";

type GetTypeScriptLoaderArguments = {
  targetToModern: boolean;
  mode: Mode;
};

const getTypeScriptLoader = ({
  targetToModern,
  mode,
}: GetTypeScriptLoaderArguments) => {
  return {
    test: /\.(ts|tsx|js|jsx)$/,
    include: [
      join(process.cwd(), source),
      join(process.cwd(), "..", "backend"),
    ],
    use: [
      {
        loader: "babel-loader",
        options: {
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
              },
            ],
          ],
          plugins: [
            "inline-react-svg",
            "@emotion",
            targetToModern &&
              mode === "development" &&
              require.resolve("react-refresh/babel"),
          ].filter(Boolean),
        },
      },
    ],
  };
};

export default getTypeScriptLoader;
