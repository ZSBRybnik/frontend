import ExtendedMode from "~scripts/build/types/extendedMode/extendedMode";

type GetTargetArguments = {
  extendedMode: ExtendedMode;
};

const getTarget = ({ extendedMode }: GetTargetArguments): string => {
  if (extendedMode === ExtendedMode.Preload) {
    return `electron-${ExtendedMode.Preload}`;
  } else if (extendedMode === ExtendedMode.Main) {
    return `electron-${ExtendedMode.Main}`;
  } else {
    return ExtendedMode.Web;
  }
};

export default getTarget;
