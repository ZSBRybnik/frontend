import { platform } from "os";
import { $ } from "zx";

(async (): Promise<void> => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  await $`eslint --fix --cache -f unix "./**/*.{js,jsx,ts,tsx,yaml,yml,toml}" && prettier --write "./**/*.{js,jsx,ts,tsx,json,prisma,yaml,yml,pug}" && sort-package-json && black source/native-addon-python`;
})();
