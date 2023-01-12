import { basename } from "path";
import { transform } from "@astrojs/compiler";
import createLoader from "../../utils/createLoader/createLoader";

const astroLoader = createLoader({
  rawLoader: async ({ source, callback, resourcePath }) => {
    const filename: string = basename(resourcePath);
    const result = await transform(source, {
      filename,
      sourcemap: "both",
      internalURL: "astro/dist/runtime/server/index.js",
    });
    callback && callback(undefined, result.code);
  },
});

export default astroLoader;
