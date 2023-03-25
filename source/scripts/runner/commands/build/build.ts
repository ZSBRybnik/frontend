import { Command } from "commander";
import { sync } from "glob";

import { platform } from "os";

import { basename } from "path";

import { $ } from "zx";

import destination from "~frontend/source/scripts/build/constants/destination/destination";

import scriptsKeys from "~frontend/source/scripts/build/constants/scriptsKeys/scriptsKeys";

import source from "~frontend/source/scripts/build/constants/source/source";

import ExtendedMode from "~frontend/source/scripts/build/types/extendedMode/extendedMode";

import Programs from "~frontend/source/scripts/runner/types/programs/programs";

type BuildFlagsOptions = {
  docker: string;
  target: string;
};
type MoveFiles = (extension: string) => Promise<void>;

const moveFiles: MoveFiles = async (extension: string): Promise<void> => {
  const compressedFiles: string[] = await sync(
    `./${destination}/source/modern/${extension}/**.*.${extension}`,
  );
  const compressedFilesMoveOperations = compressedFiles.map(
    async (file: string) => {
      const filename: string = basename(file);
      return $`${Programs.MoveFile} ${file} ./${destination}/${source}/modern/${filename}`;
    },
  );
  await Promise.all(compressedFilesMoveOperations);
  await $`${Programs.RimRaf} ./${destination}/${source}/modern/${extension}`;
};

(async (): Promise<void> => {
  const program: Command = new Command();

  program.requiredOption("-t, --target <target>", "Target device");
  program.option("--docker", "Buid with docker");
  program.parse(process.argv);

  const { target, docker }: BuildFlagsOptions = program.opts();
  const os: NodeJS.Platform = platform();
  if (os === "win32") {
    $.shell = "cmd";
    $.prefix = "";
  }
  if (docker) {
    if (target === "web") {
      await $`${Programs.Docker} build -t web -f ./dockerfiles/web/Dockerfile.web .`;
    }
  } else {
    if (target === "desktop") {
      await $`cd ./${source}/native-addon-go && ${Programs.CrossEnvironment} ${Programs.ElectronBuildEnvironment} ${Programs.Yarn} run build && cd .. && cd ..`;
      await $`cd ./${source}/native-addon-rust && ${Programs.CrossEnvironment} ${Programs.ElectronBuildEnvironment} ${Programs.Yarn} run build && cd .. && cd ..`;
    }
    await $`${Programs.Yarn} run ${scriptsKeys["remove-build"]} && ${Programs.CrossEnvironment} ${Programs.TypeScriptCompiler} --project tsconfig.noemit.json && ${Programs.CrossEnvironment} NODE_OPTIONS="--max-old-space-size=8192" TS_NODE_PROJECT=tsconfig.node.json ${Programs.Webpack} --env target=${target} --mode production`;
    if (target === ExtendedMode.Mobile) {
      await $`${Programs.Cap} sync`;
    } else if (target === ExtendedMode.Web) {
      await moveFiles("br");
      await moveFiles("gz");
    }
  }
})();
