import { platform } from "os";
import { $ } from "zx";

(async (): Promise<void> => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  await $`eslint --config ./.eslintrc.js --fix -f unix "./**/*.{ts,tsx}" && eslint --config ./.eslintrc-for-js.js --fix -f unix "./**/*.{js,json}" && prettier --write "./**/*.{js,jsx,ts,tsx,json,prisma,yaml,yml,pug}"`;
})();
