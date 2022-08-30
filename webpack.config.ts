import "dotenv/config";
import { Configuration } from "webpack";
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
) => Configuration[];

const setupConfig: SetupConfig = (
  { target }: EnvironmentArguments,
  { mode }: WebpackArguments,
): // eslint-disable-next-line max-params
Configuration[] => {
  return getConfigs({ targetType: target, mode });
};

export default setupConfig;
