import { join, resolve } from "path";
import source from "~frontend/source/scripts/build/constants/source/source";
import Mode from "~frontend/source/scripts/build/types/mode/mode";
import getTargetVersion from "~frontend/source/scripts/build/utils/getTargetVersion/getTargetVersion";

type GetTypeScriptLoaderArguments = {
  targetToModern: boolean;
  mode: Mode;
  withESBuild?: boolean;
};

const getTypeScriptLoader = ({
  targetToModern,
  mode,
  withESBuild,
}: GetTypeScriptLoaderArguments) => {
  return {
    test: /\.(ts|tsx|js|jsx)$/,
    include: [
      join(process.cwd(), source),
      join(process.cwd(), "..", "backend"),
    ],
    use: [
      {
        loader: "cache-loader",
        options: {
          cacheDirectory: resolve(".webpackCache"),
        },
      },
      {
        loader:
          mode === Mode.Development && withESBuild
            ? "esbuild-loader"
            : "babel-loader",
        options:
          withESBuild && mode === Mode.Development
            ? {
                loader: "tsx",
                target: "esnext",
              }
            : {
                presets: [
                  "next/babel",
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
                  "vuera/babel",
                  "inline-react-svg",
                  "@emotion",
                  targetToModern &&
                    mode === "development" &&
                    require.resolve("react-refresh/babel"),
                ].filter(Boolean),
              },
      },
      {
        loader: "ts-loader",
        options: {
          configFile: join(process.cwd(), "tsconfig.json"),
        },
      },
    ],
  };
};

export default getTypeScriptLoader;
