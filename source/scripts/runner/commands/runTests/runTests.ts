import commandExists from "command-exists";
import { platform } from "os";
import { $ } from "zx";

(async () => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  try {
    await commandExists("zsh");
    if (os === "linux") {
      $.shell = "zsh";
    }
  } catch {
    /* empty */
  }
  await $`cross-env NODE_OPTIONS="--max-old-space-size=8192" TS_NODE_PROJECT=tsconfig.node.json jest --coverage && cross-env NODE_OPTIONS="--max-old-space-size=8192" TS_NODE_PROJECT=tsconfig.node.json jest --config=jest.integration.config.ts --runInBand --forceExit`;
})();
