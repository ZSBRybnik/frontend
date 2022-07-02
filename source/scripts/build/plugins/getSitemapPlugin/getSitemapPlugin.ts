import SitemapPlugin from "sitemap-webpack-plugin";
import ExtendedMode from "~scripts/build/types/extendedMode/extendedMode";

type GetSitemapPluginArguments = {
  extendedMode: ExtendedMode;
};

const getSitemapPlugin = ({ extendedMode }: GetSitemapPluginArguments) => {
  if (extendedMode === ExtendedMode.Web) {
    return new SitemapPlugin({
      base: "https://krzysztofzawisla.github.io/",
      paths: ["/"],
      options: {
        filename: "../../map.xml",
      },
    });
  } else {
    return;
  }
};

export default getSitemapPlugin;
