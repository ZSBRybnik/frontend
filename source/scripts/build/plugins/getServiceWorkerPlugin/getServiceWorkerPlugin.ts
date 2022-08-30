import { GenerateSW } from "workbox-webpack-plugin";
import getTargetVersion from "~frontend/source/scripts/build/utils/getTargetVersion/getTargetVersion";

type GetServiceWorkerPluginArguments = {
  targetToModern: boolean;
};

const getServiceWorkerPlugin = ({
  targetToModern,
}: GetServiceWorkerPluginArguments) => {
  return new GenerateSW({
    cleanupOutdatedCaches: true,
    sourcemap: true,
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        handler: "NetworkFirst",
        urlPattern: /.(?:png|jpg|jpeg|svg|html|js|mjs)$/,
      },
    ],
    exclude: [/\.md$/],
    babelPresetEnvTargets: [getTargetVersion({ targetToModern })],
    swDest: `../../sw-${targetToModern ? "modern" : "legacy"}.js`,
  });
};

export default getServiceWorkerPlugin;
