import { HotModuleReplacementPlugin } from "webpack";
import Mode from "~scripts/build/types/mode/mode";

type GetHotModuleReplacementPluginArguments = {
  mode: Mode;
};

type GetHotModuleReplacementPlugin = (
  argument: GetHotModuleReplacementPluginArguments,
) => HotModuleReplacementPlugin | void;

const getHotModuleReplacementPlugin: GetHotModuleReplacementPlugin = ({
  mode,
}): HotModuleReplacementPlugin | void => {
  if (mode === Mode.Development) {
    return new HotModuleReplacementPlugin();
  }
};

export default getHotModuleReplacementPlugin;
