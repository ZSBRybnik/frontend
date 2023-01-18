import { platform } from "os";
import { $ } from "zx";
import { dependencies } from "~frontend/package.json";
import blackListedPackagesToSSR from "../../constants/blackListedPackagesToSSR/blackListedPackagesToSSR";

(async (): Promise<void> => {
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  const allDependencies = Object.keys(dependencies);
  const filteredDependencies = allDependencies.filter((dependency) => {
    return !blackListedPackagesToSSR.has(dependency);
  });
  const joinedDependencies = filteredDependencies.join(" ");
  await $([
    `cd ../backend && yarn add ${joinedDependencies}`,
  ] as unknown as TemplateStringsArray);
})();
