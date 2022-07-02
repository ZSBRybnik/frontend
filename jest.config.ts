import { Config } from "@jest/types";
import { join } from "path";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "~root/tsconfig.json";
import source from "~scripts/build/constants/source/source";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  testTimeout: 100_000_000,
  setupFilesAfterEnv: ["jest-extended", "@testing-library/jest-dom"],
  testEnvironment: "jsdom",
  snapshotSerializers: ["@emotion/jest/serializer"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: join(process.cwd(), "."),
  }),
  modulePathIgnorePatterns: [join(process.cwd(), source, "e2e")],
};

export default config;
