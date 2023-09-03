import "dotenv/config";
import type { Configuration } from "webpack";
import getConfigs from "~frontend/source/scripts/build/root/getConfigs/getConfigs";
import Mode from "~frontend/source/scripts/build/types/mode/mode";
import { TargetType } from "~frontend/source/shared/constants/target/target";

interface EnvironmentArguments {
  target: TargetType;
}

interface WebpackArguments {
  mode: Mode;
}

type SetupConfig = (
  environmentArguments: EnvironmentArguments,
  webpackArguments: WebpackArguments,
) => Promise<Configuration[]>;

const setupConfig: SetupConfig = async (
  { target }: EnvironmentArguments,
  { mode }: WebpackArguments,
): // eslint-disable-next-line max-params
Promise<Configuration[]> => {
  return await getConfigs({ targetType: target, mode });
};

export default setupConfig;
