import getBrotliCompressionPlugin from "~frontend/source/scripts/build/plugins/getBrotliCompressionPlugin/getBrotliCompressionPlugin";
import getBundleAnalyzerPlugin from "~frontend/source/scripts/build/plugins/getBundleAnalyzerPlugin/getBundleAnalyzerPlugin";
import getCleanWebpackPlugin from "~frontend/source/scripts/build/plugins/getCleanWebpackPlugin/getCleanWebpackPlugin";
import getCopyWebpackPlugin from "~frontend/source/scripts/build/plugins/getCopyWebpackPlugin/getCopyWebpackPlugin";
import getDefinePlugin from "~frontend/source/scripts/build/plugins/getDefinePlugin/getDefinePlugin";
import getDuplicatePackageCheckerPlugin from "~frontend/source/scripts/build/plugins/getDuplicatePackageCheckerPlugin/getDuplicatePackageCheckerPlugin";
import getESLintPlugin from "~frontend/source/scripts/build/plugins/getEslintPlugin/getEslintPlugin";
import getGzipCompressionPlugin from "~frontend/source/scripts/build/plugins/getGzipCompressionPlugin/getGzipCompressionPlugin";
import getHtmlWebpackPlugin from "~frontend/source/scripts/build/plugins/getHtmlWebpackPlugin/getHtmlWebpackPlugin";
import getHtmWebpackPlugin from "~frontend/source/scripts/build/plugins/getHtmWebpackPlugin/getHtmWebpackPlugin";
import getInterpolateHtmlPlugin from "~frontend/source/scripts/build/plugins/getInterpolateHtmlPlugin/getInterpolateHtmlPlugin";
import getJsonMinimizerPlugin from "~frontend/source/scripts/build/plugins/getJsonMinimizerPlugin/getJsonMinimizerPlugin";
import getLicensePlugin from "~frontend/source/scripts/build/plugins/getLicensePlugin/getLicensePlugin";
import getNodePolyfillPlugin from "~frontend/source/scripts/build/plugins/getNodePolyfillPlugin/getNodePolyfillPlugin";
import getPreloadWebpackPlugin from "~frontend/source/scripts/build/plugins/getPreloadWebpackPlugin/getPreloadWebpackPlugin";
import getProvidePlugin from "~frontend/source/scripts/build/plugins/getProvidePlugin/getProvidePlugin";
import getReactRefreshWebpackPlugin from "~frontend/source/scripts/build/plugins/getReactRefreshWebpackPlugin/getReactRefreshWebpackPlugin";
import getRobotTxtPlugin from "~frontend/source/scripts/build/plugins/getRobotsTxtPlugin/getRobotsTxtPlugin";
import getScriptExtensionHtmlWebpackPlugin from "~frontend/source/scripts/build/plugins/getScriptExtensionHtmlWebpackPlugin/getScriptExtensionHtmlWebpackPlugin";
import getSitemapPlugin from "~frontend/source/scripts/build/plugins/getSitemapPlugin/getSitemapPlugin";
import getUnusedWebpackPlugin from "~frontend/source/scripts/build/plugins/getUnusedWebpackPlugin/getUnusedWebpackPlugin";
import ExtendedMode from "~frontend/source/scripts/build/types/extendedMode/extendedMode";
import Mode from "~frontend/source/scripts/build/types/mode/mode";

type GetPluginsArguments = {
  targetToModern: boolean;
  mode: Mode;
  extendedMode: ExtendedMode;
};

const getPlugins = ({
  targetToModern,
  mode,
  extendedMode,
}: GetPluginsArguments) => {
  return [
    getProvidePlugin({ extendedMode }),
    getUnusedWebpackPlugin({ extendedMode }),
    getDuplicatePackageCheckerPlugin(),
    getInterpolateHtmlPlugin(),
    getScriptExtensionHtmlWebpackPlugin(),
    getDefinePlugin({
      publicURL: "public",
      targetToModern,
      mode,
      extendedMode,
    }),
    getReactRefreshWebpackPlugin({ mode, targetToModern }),
    getCleanWebpackPlugin(),
    getBrotliCompressionPlugin({ targetToModern, extendedMode }),
    getGzipCompressionPlugin({ targetToModern, extendedMode }),
    getPreloadWebpackPlugin({ targetToModern }),
    getHtmlWebpackPlugin({ mode, extendedMode, targetToModern }),
    getHtmWebpackPlugin({ mode, extendedMode, targetToModern }),
    getESLintPlugin(),
    getJsonMinimizerPlugin(),
    getBundleAnalyzerPlugin({
      targetToModern,
      extendedMode,
    }),
    getRobotTxtPlugin({ targetToModern, extendedMode }),
    getLicensePlugin({ targetToModern, extendedMode }),
    getNodePolyfillPlugin(),
    getSitemapPlugin({ extendedMode }),
    getCopyWebpackPlugin({ extendedMode }),
  ].filter(Boolean);
};

export default getPlugins;
