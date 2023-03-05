const tsconfig = require("./tsconfig.node.json");
require("ts-node").register(tsconfig);
const { default: config } = require("./eslintrc-for-js.ts");

module.exports = config;
