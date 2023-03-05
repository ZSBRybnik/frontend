import type { Linter } from "eslint";

const config: Linter.Config = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
    node: true,
  },
  extends: [
    "plugin:testing-library/react",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsdoc/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:sonarjs/recommended",
    "plugin:node/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "testing-library",
    "react",
    "@typescript-eslint",
    "eslint-plugin-tsdoc",
    "jsdoc",
    "jest",
    "prettier",
    "sonarjs",
    "@emotion",
    "deprecation",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "jsx-a11y/aria-role": [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "react",
            importNames: ["useState"],
            message: "Please import 'useState' from hooks folder instead.",
          },
        ],
      },
    ],
    "max-params": ["error", 1],
    "@typescript-eslint/no-inferrable-types": "off",
    "no-invalid-this": "error",
    "react/react-in-jsx-scope": "off",
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "off",
    "no-nested-ternary": "off",
    "deprecation/deprecation": "warn",
    "node/no-unsupported-features/es-syntax": "off",
    "node/no-missing-require": "off",
    "node/no-missing-import": "off",
    "node/no-extraneous-import": "off",
    "node/no-unsupported-features/es-builtins": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};

export default config;
