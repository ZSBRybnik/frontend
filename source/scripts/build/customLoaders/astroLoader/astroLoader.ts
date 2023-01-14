import { basename } from "path";
import createLoader from "../../utils/createLoader/createLoader";
import dynamicImport from "./helper";

const astroLoader = createLoader({
  async: true,
  rawLoader: async ({ source, callback, resourcePath, meta, map }) => {
    const { transform } = await dynamicImport();
    const filename: string = basename(resourcePath);
    const result = await transform(source, {
      filename,
      sourcemap: "both",
      //internalURL: "astro/dist/runtime/server/index.js",
    });
    console.log(result.code);
    callback && callback(null, result.code, map, meta);
  },
});

export default astroLoader;
