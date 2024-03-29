import { platform } from "os";
import { $ } from "zx";
import handlePostInstallLinux from "~frontend/source/scripts/runner/utils/handlePostInstall/handlePostInstallLinux/handlePostInstallLinux";
import handlePostInstallMacOS from "~frontend/source/scripts/runner/utils/handlePostInstall/handlePostInstallMacOS/handlePostInstallMacOS";
import handlePostInstallWindows from "~frontend/source/scripts/runner/utils/handlePostInstall/handlePostInstallWindows/handlePostInstallWindows";

(async () => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  await $`ionic config set -g npmClient yarn && husky install && yarn config set network-timeout 1000000000 -g && yarn run generate-types`;
  if (os === "win32") {
    await handlePostInstallWindows();
  } else if (os === "darwin") {
    await handlePostInstallMacOS();
  } else {
    await handlePostInstallLinux();
  }
})();
