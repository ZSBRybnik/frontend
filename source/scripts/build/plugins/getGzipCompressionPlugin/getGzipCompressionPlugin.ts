import CompressionPlugin from "compression-webpack-plugin";
import { WebpackPluginInstance } from "webpack";
import ExtendedMode from "~scripts/build/types/extendedMode/extendedMode";

type GetCompressionPluginArguments = {
  targetToModern: boolean;
  extendedMode: ExtendedMode;
};

type GetGzipCompressionPlugin = (
  argument: GetCompressionPluginArguments,
) => WebpackPluginInstance | void;

const getGzipCompressionPlugin: GetGzipCompressionPlugin = ({
  targetToModern,
  extendedMode,
}: GetCompressionPluginArguments): WebpackPluginInstance | void => {
  if (targetToModern && extendedMode === ExtendedMode.Web) {
    return new CompressionPlugin({
      filename: "[path]/gz/[base].gz",
      algorithm: "gzip",
      test: /\.(js|mjs|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    });
  }
};

export default getGzipCompressionPlugin;
