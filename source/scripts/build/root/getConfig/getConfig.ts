import Configuration from "~frontend/source/scripts/build/types/configuration/configuration";
import ExtendedMode from "~frontend/source/scripts/build/types/extendedMode/extendedMode";
import Mode from "~frontend/source/scripts/build/types/mode/mode";
import getEntryPoint from "~frontend/source/scripts/build/utils/getEntryPoint/getEntryPoint";
import getTarget from "~frontend/source/scripts/build/utils/getTarget/getTarget";
import getDevelopmentServer from "~frontend/source/scripts/build/wrappers/getDevelopmentServer/getDevelopmentServer";
import getExperiments from "~frontend/source/scripts/build/wrappers/getExperiments/getExperiments";
import getExternals from "~frontend/source/scripts/build/wrappers/getExternals/getExternals";
import getLoaders from "~frontend/source/scripts/build/wrappers/getLoaders/getLoaders";
import getNode from "~frontend/source/scripts/build/wrappers/getNode/getNode";
import getOptimization from "~frontend/source/scripts/build/wrappers/getOptimization/getOptimization";
import getOutput from "~frontend/source/scripts/build/wrappers/getOutput/getOutput";
import getPlugins from "~frontend/source/scripts/build/wrappers/getPlugins/getPlugins";
import getResolve from "~frontend/source/scripts/build/wrappers/getResolve/getResolve";

type GetConfigArguments = {
  extendedMode: ExtendedMode;
  targetToModern: boolean;
  mode: Mode;
};

type GetConfig = (argument: GetConfigArguments) => Configuration;

const getConfig: GetConfig = ({
  extendedMode,
  targetToModern,
  mode,
}: GetConfigArguments): Configuration => {
  return {
    mode: mode === Mode.Development ? mode : Mode.Production,
    entry: getEntryPoint({ extendedMode }),
    devtool: "source-map",
    target: getTarget({ extendedMode }),
    optimization: getOptimization({ mode }),
    module: {
      rules: getLoaders({ targetToModern, mode }),
    },
    node: getNode(),
    externals: getExternals({ extendedMode }),
    plugins: getPlugins({
      targetToModern,
      mode,
      extendedMode,
    }),
    resolve: getResolve(),
    output: getOutput({ targetToModern, extendedMode }),
    experiments: getExperiments({ targetToModern }),
    devServer: getDevelopmentServer({ targetToModern, extendedMode }),
  };
};

export default getConfig;
