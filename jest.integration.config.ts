import { Config } from "@jest/types";
import presetPuppeter from "jest-puppeteer/jest-preset";
import { join } from "path";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "~frontend/tsconfig.json";
import getBabelLoader from "./source/scripts/build/subloaders/getBabelLoader/getBabelLoader";
import Mode from "./source/scripts/build/types/mode/mode";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  setupFilesAfterEnv: [
    "jest-extended",
    "expect-puppeteer",
    "@testing-library/jest-dom",
  ],
  snapshotSerializers: ["@emotion/jest/serializer"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: join(process.cwd(), "."),
  }),
  testTimeout: 100_000_000,
  testMatch: ["**/*.integration.test.ts"],
  transform: {
    ".(ts|tsx)$": [
      "ts-jest",
      {
        babelConfig: getBabelLoader({
          targetToModern: true,
          mode: Mode.Production,
        }),
      },
    ],
  },
  ...presetPuppeter,
};

export default config;
