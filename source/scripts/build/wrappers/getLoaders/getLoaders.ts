import { RuleSetRule } from "webpack";
import getCssLoader from "~frontend/source/scripts/build/loaders/getCssLoader/getCssLoader";
import getJavaScriptModuleLoader from "~frontend/source/scripts/build/loaders/getJavaScriptModuleLoader/getJavaScriptModuleLoader";
import getNodeLoader from "~frontend/source/scripts/build/loaders/getNodeLoader/getNodeLoader";
import getPugLoader from "~frontend/source/scripts/build/loaders/getPugLoader/getPugLoader";
import getSourceMapLoader from "~frontend/source/scripts/build/loaders/getSourceMapLoader/getSourceMapLoader";
import getTypeScriptLoader from "~frontend/source/scripts/build/loaders/getTypeScriptLoader/getTypeScriptLoader";
import Mode from "~frontend/source/scripts/build/types/mode/mode";

type GetLoaderArguments = {
  targetToModern: boolean;
  mode: Mode;
};

type GetLoader = (argument: GetLoaderArguments) => RuleSetRule[];

const getLoaders: GetLoader = ({
  targetToModern,
  mode,
}: GetLoaderArguments): RuleSetRule[] => {
  return [
    getSourceMapLoader(),
    getPugLoader(),
    getTypeScriptLoader({ targetToModern, mode }),
    getNodeLoader(),
    getJavaScriptModuleLoader(),
    getCssLoader(),
  ];
};

export default getLoaders;
