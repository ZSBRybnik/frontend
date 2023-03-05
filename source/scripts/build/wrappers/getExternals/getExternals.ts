import nodeExternals from "webpack-node-externals";
import ExtendedMode from "~frontend/source/scripts/build/types/extendedMode/extendedMode";
import Configuration from "../../types/configuration/configuration";

type GetExternalsArguments = {
  extendedMode: ExtendedMode;
};

const getExternals = ({
  extendedMode,
}: GetExternalsArguments): Configuration["externals"] => {
  if (extendedMode === ExtendedMode.Main) {
    return [
      nodeExternals({
        allowlist: [/^(?!(^(ffi-napi)$)).*$/i],
      }),
    ];
  } else {
    return;
  }
};

export default getExternals;
