import { $ } from "zx";
import { platform } from "os";
import { join } from "path";
import { Command } from "commander";
import packager from "electron-packager";
import SuperExpressive from "super-expressive";

type BuildFlagsOptions = {
  platform: string;
  architecture: string;
};

const ignoredPaths = new Set([
  ".prettierrc.json",
  "node_modules",
  ".eslintrc.json",
  ".husky",
  ".github",
  join(".", "ios"),
  join(".", "source"),
  "package-lock.json",
  ".env",
  ".faunarc",
  ".eslintignore",
  ".fleek.json",
  ".gitattributes",
  ".graphqlrc.ts",
  ".prettierignore",
  ".stylelintrc.json",
  ".whitesource",
  "capacitor.config.ts",
  join(".", "dockerfiles"),
  ".gitignore",
  "README.md",
  join(".", "bundle-analyzes"),
  "webpack.config.ts",
  join(".", "release-builds"),
  join(".", "android"),
  "audit-ci.json",
  "tsconfig.json",
  "gun-database",
  ".storybook",
  "tslint.json",
  "yarn-error.log",
  "vite.config.ts",
  "tsconfig.node.json",
  "tsconfig.tsbuildinfo",
  "justfile",
  "jest-puppeteer.config.ts",
  "jest-puppeteer.config.test.ts",
  "jest-puppeteer.config.js",
  "jest.integration.config.ts",
  "jest.d.ts",
  "jest.config.ts",
  "ionic.config.json",
  "global.d.ts",
  "nginx.conf",
]);

const transformedIgnoredPaths = [...ignoredPaths.values()].map((value) => {
  const regex = SuperExpressive().startOfInput.string(`/${value}`).toRegex();
  console.log(regex);
  return regex;
});

(async (): Promise<void> => {
  const program: Command = new Command();
  program.requiredOption(
    "-a, --architecture <x64 | ia32>",
    "Target architecture",
  );
  program.requiredOption(
    "-p, --platform <win32 | linux | darwin>",
    "Target platform",
  );
  program.parse(process.argv);
  const { platform: platformArgument, architecture }: BuildFlagsOptions =
    program.opts();
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  await packager({
    dir: ".",
    overwrite: true,
    ignore: transformedIgnoredPaths,
    platform: platformArgument,
    arch: architecture,
    prune: true,
    out: "release-builds",
    asar: true,
    name: "ZSB Rybnik",
  });
})();
