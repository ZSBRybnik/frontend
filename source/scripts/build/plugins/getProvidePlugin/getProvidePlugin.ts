import { ProvidePlugin } from "webpack";
import ExtendedMode from "~scripts/build/types/extendedMode/extendedMode";

type GetProvidePluginArguemnts = {
  extendedMode: ExtendedMode;
};

const getProvidePlugin = ({ extendedMode }: GetProvidePluginArguemnts) => {
  if (
    extendedMode === ExtendedMode.Web ||
    extendedMode === ExtendedMode.Renderer ||
    extendedMode === ExtendedMode.Mobile
  ) {
    return new ProvidePlugin({
      process: "process/browser",
    });
  } else {
    return;
  }
};

export default getProvidePlugin;
