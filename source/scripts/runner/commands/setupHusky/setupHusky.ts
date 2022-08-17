import { platform } from "os";
import { $ } from "zx";
import scriptsKeys from "~scripts/build/constants/scriptsKeys/scriptsKeys";
import Programs from "~scripts/runner/types/programs/programs";

(async (): Promise<void> => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  await $`${Programs.Husky} add .${Programs.Husky}/pre-commit "${Programs.Yarn} run ${scriptsKeys["lint"]} && ${Programs.Yarn} run ${scriptsKeys["test"]} && sort-package-json" && ${Programs.Husky} add .${Programs.Husky}/post-merge "${Programs.Yarn}"`;
})();
