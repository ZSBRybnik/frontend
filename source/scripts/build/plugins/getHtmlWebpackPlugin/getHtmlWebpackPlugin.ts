import HtmlWebpackPlugin from "html-webpack-plugin";
import { upperFirst } from "lodash";
import { join } from "path";
import destination from "~scripts/build/constants/destination/destination";
import ExtendedMode from "~scripts/build/types/extendedMode/extendedMode";
import Mode from "~scripts/build/types/mode/mode";

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
  if (targetToModern) {
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
