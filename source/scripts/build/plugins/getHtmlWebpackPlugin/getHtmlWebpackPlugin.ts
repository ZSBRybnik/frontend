import HtmlWebpackPlugin from "html-webpack-plugin";
import { upperFirst } from "lodash";
import { join } from "path";
import destination from "~frontend/source/scripts/build/constants/destination/destination";
import ExtendedMode from "~frontend/source/scripts/build/types/extendedMode/extendedMode";
import Mode from "~frontend/source/scripts/build/types/mode/mode";

type GetHtmlWebpackPluginArguments = {
  mode: Mode;
  extendedMode: ExtendedMode;
  targetToModern: boolean;
};

const getHtmlWebpackPlugin = ({
  mode,
  extendedMode,
  targetToModern,
}: GetHtmlWebpackPluginArguments) => {
  if (
    targetToModern &&
    (extendedMode === ExtendedMode.Web ||
      extendedMode === ExtendedMode.Mobile ||
      extendedMode === ExtendedMode.Renderer)
  ) {
    return new HtmlWebpackPlugin({
      template: join(
        process.cwd(),
        "source",
        "public",
        "notStatic",
        `index${
          extendedMode === ExtendedMode.Web ? upperFirst(ExtendedMode.Web) : ""
        }.pug`,
      ),
      filename: join(process.cwd(), destination, "index.html"),
      scriptLoading: "blocking",
      minify: mode !== Mode.Development,
      inject: true,
    });
  } else {
    return;
  }
};

export default getHtmlWebpackPlugin;
