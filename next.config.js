const tsconfig = require("./tsconfig.node.json");
require("ts-node").register(tsconfig);
const { default: config } = require("./next.config.ts");

module.exports = config;
