import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

const getNodePolyfillPlugin = () => {
  return new NodePolyfillPlugin({
    excludeAliases: ["console"],
  });
};

export default getNodePolyfillPlugin;
