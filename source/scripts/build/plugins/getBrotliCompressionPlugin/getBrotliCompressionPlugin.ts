import CompressionPlugin from "compression-webpack-plugin";
import { WebpackPluginInstance } from "webpack";
import ExtendedMode from "~scripts/build/types/extendedMode/extendedMode";

type GetCompressionPluginArguments = {
  targetToModern: boolean;
  extendedMode: ExtendedMode;
};

type GetBrotliCompressionPlugin = (
  argument: GetCompressionPluginArguments,
) => WebpackPluginInstance | void;

const getBrotliCompressionPlugin: GetBrotliCompressionPlugin = ({
  targetToModern,
  extendedMode,
}: GetCompressionPluginArguments): WebpackPluginInstance | void => {
  if (targetToModern && extendedMode === ExtendedMode.Web) {
    return new CompressionPlugin({
      filename: "[path]/br/[base].br",
      algorithm: "brotliCompress",
      test: /\.(js|mjs|css|html|svg)$/,
      compressionOptions: {
        level: 11,
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    });
  }
};

export default getBrotliCompressionPlugin;
