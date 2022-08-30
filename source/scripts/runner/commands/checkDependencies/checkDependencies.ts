import { $ } from "zx";
import source from "~frontend/source/scripts/build/constants/source/source";
import Programs from "~frontend/source/scripts/runner/types/programs/programs";

(async (): Promise<void> => {
  await $`${Programs.NPMCheckUpdates} && cd ./${source}/native-addon-rust && ncu`;
})();
