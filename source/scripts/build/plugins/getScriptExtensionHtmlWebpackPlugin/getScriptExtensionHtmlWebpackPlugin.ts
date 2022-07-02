import ScriptExtensionHtmlWebpackPlugin from "script-ext-html-webpack-plugin";

const getScriptExtensionHtmlWebpackPlugin = () => {
  return new ScriptExtensionHtmlWebpackPlugin({
    async: "index.js",
    module: "index.js",
  });
};

export default getScriptExtensionHtmlWebpackPlugin;
