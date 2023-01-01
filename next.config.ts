/* eslint-disable max-params */
import { NextConfig } from "next";
import ExtendedMode from "./source/scripts/build/types/extendedMode/extendedMode";
import Mode from "./source/scripts/build/types/mode/mode";
import getConfig from "./source/scripts/build/root/getConfig/getConfig";
import { Configuration, WebpackPluginInstance, RuleSetRule } from "webpack";
import { join } from "path";
import "dotenv/config";

type ExtendedModeToTargetMapper = { [key: string]: ExtendedMode };

const extendedModeToTargetMapper: ExtendedModeToTargetMapper = {
  desktop: ExtendedMode.Renderer,
  web: ExtendedMode.Web,
  mobile: ExtendedMode.Mobile,
};

const config: NextConfig = async () => {
  const ownWebpackConfig = await getConfig({
    extendedMode:
      extendedModeToTargetMapper[
        (process.env.NEXTJS_TARGET as string) || "web"
      ],
    targetToModern: true,
    mode: Mode.Production,
  });
  return {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    distDir: join(
      "..",
      "..",
      "destination",
      process.env.NEXTJS_TARGET === "mobile" ? "next" : "",
    ),
    experimental: {
      externalDir: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
      tsconfigPath: join("..", "..", "tsconfig.nextjs.json"),
    },
    webpack: (webpackConfig: Configuration) => {
      webpackConfig.mode = ownWebpackConfig.mode;
      webpackConfig!.resolve = {
        ...webpackConfig!.resolve,
        ...ownWebpackConfig!.resolve,
        alias: {
          ...webpackConfig!.resolve!.alias,
          ...ownWebpackConfig!.resolve!.alias,
        },
        extensions: [
          ...new Set([
            ...(webpackConfig!.resolve!.extensions as string[]),
            ...(ownWebpackConfig!.resolve!.extensions as string[]),
          ]),
        ],
      };

      webpackConfig.node = {
        ...webpackConfig.node,
        ...ownWebpackConfig.node,
      };
      webpackConfig.devtool = ownWebpackConfig.devtool;
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        minimizer: [
          ...(webpackConfig.optimization?.minimizer as WebpackPluginInstance[]),
          ...(ownWebpackConfig.optimization
            ?.minimizer as WebpackPluginInstance[]),
        ],
        usedExports: true,
      };
      webpackConfig.plugins = [
        ...(webpackConfig.plugins as WebpackPluginInstance[]),
        ...(ownWebpackConfig.plugins as WebpackPluginInstance[]),
      ];
      webpackConfig.module = {
        ...webpackConfig.module,
        ...ownWebpackConfig.module,
        rules: [
          ...(webpackConfig.module?.rules as RuleSetRule[]),
          ...(ownWebpackConfig.module?.rules as RuleSetRule[]),
        ],
      };
      webpackConfig.experiments = {
        ...webpackConfig.experiments,
        ...ownWebpackConfig.experiments,
        outputModule: false,
      };
      return webpackConfig;
    },
  };
};

export default config;
