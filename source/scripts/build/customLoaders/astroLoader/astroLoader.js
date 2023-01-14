const tsconfig = require("../../../../../tsconfig.node.json");
require("ts-node").register(tsconfig);
const { default: loader } = require("./astroLoader.ts");

module.exports = loader;
