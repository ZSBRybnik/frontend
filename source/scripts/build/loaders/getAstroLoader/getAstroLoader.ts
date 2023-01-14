import { join } from "path";

const getAstroLoader = () => {
  return {
    test: /\.(astro)$/,
    enforce: "pre",
    use: [
      join(
        process.cwd(),
        "source",
        "scripts",
        "build",
        "customLoaders",
        "astroLoader",
        "astroLoader.js",
      ),
    ],
  };
};

export default getAstroLoader;
