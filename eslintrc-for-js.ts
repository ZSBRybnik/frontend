import type { Linter } from "eslint";
import typescriptESLintConfig from "./eslintrc";

const config: Linter.Config = {
  ...typescriptESLintConfig,
  parserOptions: {
    ...typescriptESLintConfig.parserOptions,
    project: null,
  },
  rules: {
    ...typescriptESLintConfig.rules,
    "deprecation/deprecation": "off",
  },
};

export default config;
