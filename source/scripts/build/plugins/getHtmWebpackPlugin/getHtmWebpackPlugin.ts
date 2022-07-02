import HtmlWebpackPlugin from "html-webpack-plugin";
import { upperFirst } from "lodash";
import { join } from "path";
import destination from "~scripts/build/constants/destination/destination";
import ExtendedMode from "~scripts/build/types/extendedMode/extendedMode";
import Mode from "~scripts/build/types/mode/mode";

type GetHtmWebpackPluginArguments = {
  mode: Mode;
  extendedMode: ExtendedMode;
  targetToModern: boolean;
};

const getHtmWebpackPlugin = ({
  mode,
  extendedMode,
  targetToModern,
}: GetHtmWebpackPluginArguments) => {
  if (targetToModern && extendedMode === ExtendedMode.Web) {
    return new HtmlWebpackPlugin({
      template: join(
        process.cwd(),
        "src",
        "public",
        "notStatic",
        `index${
          extendedMode === ExtendedMode.Web ? upperFirst(ExtendedMode.Web) : ""
        }.pug`,
      ),
      filename: join(process.cwd(), destination, "index.htm"),
      scriptLoading: "blocking",
      minify: mode !== Mode.Development,
      inject: true,
    });
  } else {
    return;
  }
};

export default getHtmWebpackPlugin;
