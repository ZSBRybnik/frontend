import PreloadWebpackPlugin from "@vue/preload-webpack-plugin";

type GetPreloadWebpackPluginArguments = {
  targetToModern: boolean;
};

const getPreloadWebpackPlugin = ({
  targetToModern,
}: GetPreloadWebpackPluginArguments) => {
  if (targetToModern) {
    return new PreloadWebpackPlugin({
      rel: "prefetch",
    });
  } else {
    return;
  }
};

export default getPreloadWebpackPlugin;
