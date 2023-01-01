import nodeExternals from "webpack-node-externals";
import ExtendedMode from "~frontend/source/scripts/build/types/extendedMode/extendedMode";

type GetExternalsArguments = {
  extendedMode: ExtendedMode;
};

const getExternals = ({ extendedMode }: GetExternalsArguments) => {
  if (extendedMode === ExtendedMode.Main) {
    return [
      nodeExternals({
        allowlist: [/^(?!(^(ffi-napi)$)).*$/i],
      }),
      "next",
    ];
  } else {
    return;
  }
};

export default getExternals;
