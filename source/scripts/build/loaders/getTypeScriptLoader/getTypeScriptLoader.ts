import { join, resolve } from "path";
import source from "~frontend/source/scripts/build/constants/source/source";
import getBabelLoader from "~frontend/source/scripts/build/subloaders/getBabelLoader/getBabelLoader";
import Mode from "~frontend/source/scripts/build/types/mode/mode";

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
            : getBabelLoader({
                targetToModern,
                mode,
              }),
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
