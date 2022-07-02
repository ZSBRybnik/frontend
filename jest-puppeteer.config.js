const tsconfig = require("./tsconfig.node.json");
require("ts-node").register(tsconfig);
const { default: config } = require("./jest-puppeteer.config.ts");

module.exports = config;
