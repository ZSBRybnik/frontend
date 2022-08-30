import CopyWebpackPlugin, { Pattern } from "copy-webpack-plugin";
import { join } from "path";
import destination from "~frontend/source/scripts/build/constants/destination/destination";
import source from "~frontend/source/scripts/build/constants/source/source";
import ExtendedMode from "~frontend/source/scripts/build/types/extendedMode/extendedMode";

type GetCopyWebpackPluginArguments = {
  extendedMode: ExtendedMode;
};

type GetCopyWebpackPlugin = (
  argument: GetCopyWebpackPluginArguments,
) => CopyWebpackPlugin;

const getCopyWebpackPlugin: GetCopyWebpackPlugin = ({
  extendedMode,
}: GetCopyWebpackPluginArguments): CopyWebpackPlugin => {
  return new CopyWebpackPlugin({
    patterns: [
      extendedMode === ExtendedMode.Main && {
        from: join(process.cwd(), source, "native-addon-go", destination),
        to: join(process.cwd(), destination, source, "main"),
        noErrorOnMissing: true,
      },
      {
        from: join(process.cwd(), source, "public", "static"),
        to: join(process.cwd(), destination, "public"),
        noErrorOnMissing: true,
      },
    ].filter(Boolean) as Pattern[],
    options: {
      concurrency: 100,
    },
  });
};

export default getCopyWebpackPlugin;
