import { resolve } from "path";

const getAstroLoader = () => {
  return {
    test: /\.(astro)$/,
    use: [resolve("../../customLoaders/astroLoader")],
  };
};

export default getAstroLoader;
