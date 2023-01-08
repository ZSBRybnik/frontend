import { upperFirst } from "lodash";
import { join } from "path";
import destination from "~frontend/source/scripts/build/constants/destination/destination";
import ExtendedMode from "~frontend/source/scripts/build/types/extendedMode/extendedMode";
import { AdditionalPath } from "~frontend/source/scripts/build/utils/getEntryPoint/getEntryPoint";
import getExtendedModeFolder from "~frontend/source/scripts/build/utils/getExtendedModeFolder/getExtendedModeFolder";
import getTargetToModernFolder from "~frontend/source/scripts/build/utils/getTargetToModernFolder/getTargetToModernFolder";

type GetOutputArguments = {
  targetToModern: boolean;
  extendedMode: ExtendedMode;
};

type GetOutputPublicPathArguments = {
  extendedMode: ExtendedMode;
  targetToModernFolder: string;
};

const getOutputPublicPath = ({
  extendedMode,
  targetToModernFolder,
}: GetOutputPublicPathArguments) => {
  if (extendedMode === ExtendedMode.Web) {
    return `/source/${targetToModernFolder}/`;
  } else if (extendedMode === ExtendedMode.Renderer) {
    const ex = upperFirst(extendedMode);
    return `/source/${AdditionalPath[ex as never]}/`;
  } else if (
    extendedMode === ExtendedMode.Main ||
    extendedMode === ExtendedMode.Preload
  ) {
    return "";
  } else {
    return "/source/";
  }
};

const getOutput = ({ targetToModern, extendedMode }: GetOutputArguments) => {
  const extendedModeFolder = getExtendedModeFolder({ extendedMode });
  const targetToModernFolder = getTargetToModernFolder({
    targetToModern,
    extendedMode,
  });
  return {
    path: join(
      process.cwd(),
      destination,
      "source",
      extendedModeFolder,
      targetToModernFolder,
    ),
    publicPath: getOutputPublicPath({ extendedMode, targetToModernFolder }),
    filename: "index.js",

    module: Boolean(
      targetToModern &&
        (extendedMode === ExtendedMode.Web ||
          extendedMode === ExtendedMode.Renderer ||
          extendedMode === ExtendedMode.Mobile),
    ),
    chunkFilename: "[id].js",
  };
};

export default getOutput;
