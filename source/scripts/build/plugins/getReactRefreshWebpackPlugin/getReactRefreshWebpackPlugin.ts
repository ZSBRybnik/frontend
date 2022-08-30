import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import Mode from "~frontend/source/scripts/build/types/mode/mode";

type GetReactRefreshWebpackPluginArguments = {
  mode: Mode;
  targetToModern: boolean;
};

const getReactRefreshWebpackPlugin = ({
  mode,
  targetToModern,
}: GetReactRefreshWebpackPluginArguments):
  | ReactRefreshWebpackPlugin
  | undefined => {
  if (targetToModern && mode === Mode.Development) {
    return new ReactRefreshWebpackPlugin();
  } else {
    return;
  }
};

export default getReactRefreshWebpackPlugin;
