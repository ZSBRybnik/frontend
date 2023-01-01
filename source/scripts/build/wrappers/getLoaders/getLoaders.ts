import { RuleSetRule } from "webpack";
import getCssLoader from "~frontend/source/scripts/build/loaders/getCssLoader/getCssLoader";
import getJavaScriptModuleLoader from "~frontend/source/scripts/build/loaders/getJavaScriptModuleLoader/getJavaScriptModuleLoader";
import getNodeLoader from "~frontend/source/scripts/build/loaders/getNodeLoader/getNodeLoader";
import getPugLoader from "~frontend/source/scripts/build/loaders/getPugLoader/getPugLoader";
import getSourceMapLoader from "~frontend/source/scripts/build/loaders/getSourceMapLoader/getSourceMapLoader";
import getTypeScriptLoader from "~frontend/source/scripts/build/loaders/getTypeScriptLoader/getTypeScriptLoader";
import Mode from "~frontend/source/scripts/build/types/mode/mode";
import getPureScriptLoader from "~frontend/source/scripts/build/loaders/getPureScriptLoader/getPureScriptLoader";
import getHaxeLoader from "~frontend/source/scripts/build/loaders/getHaxeLoader/getHaxeLoader";
import getNimLoader from "~frontend/source/scripts/build/loaders/getNimLoader/getNimLoader";
import getSvelteLoader from "~frontend/source/scripts/build/loaders/getSvelteLoader/getSvelteLoader";
import ExtendedMode from "~frontend/source/scripts/build/types/extendedMode/extendedMode";
import extendedModesWithNextJSCompilation from "../../constants/extendedModesWithNextJSCompilation/extendedModesWithNextJSCompilation";

type GetLoaderArguments = {
  targetToModern: boolean;
  mode: Mode;
  extendedMode: ExtendedMode;
};

type GetLoader = (argument: GetLoaderArguments) => RuleSetRule[];

const getLoaders: GetLoader = ({
  targetToModern,
  mode,
  extendedMode,
}: GetLoaderArguments): RuleSetRule[] => {
  const usingNextJS = extendedModesWithNextJSCompilation.has(extendedMode);
  return [
    getSourceMapLoader(),
    getPugLoader(),
    getTypeScriptLoader({ targetToModern, mode, withESBuild: false }),
    getNodeLoader(),
    getJavaScriptModuleLoader(),
    getPureScriptLoader(),
    getHaxeLoader(),
    getNimLoader(),
    getSvelteLoader(),
    !usingNextJS && getCssLoader(),
  ].filter(Boolean) as RuleSetRule[];
};

export default getLoaders;
