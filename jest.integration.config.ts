import { Config } from "@jest/types";
import presetPuppeter from "jest-puppeteer/jest-preset";
import { join } from "path";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "~root/tsconfig.json";

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
  testMatch: ["**/*.integration.test.ts"],
  ...presetPuppeter,
};

export default config;
