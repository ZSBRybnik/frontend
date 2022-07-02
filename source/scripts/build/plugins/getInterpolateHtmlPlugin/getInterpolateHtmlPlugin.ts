import InterpolateHtmlPlugin from "interpolate-html-plugin";

const getInterpolateHtmlPlugin = () => {
  return new InterpolateHtmlPlugin({
    PUBLIC_URL: "/public",
    LEGACY_SCRIPT: "/src/legacy/index.js",
  });
};

export default getInterpolateHtmlPlugin;
