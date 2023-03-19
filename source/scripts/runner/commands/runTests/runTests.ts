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
  await $`cross-env TS_NODE_PROJECT=tsconfig.node.json jest --coverage && cross-env TS_NODE_PROJECT=tsconfig.node.json jest --config=jest.integration.config.ts --runInBand --forceExit`;
})();
