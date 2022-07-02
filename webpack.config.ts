import { config } from "dotenv";
import { Configuration } from "webpack";
import getConfigs from "~scripts/build/root/getConfigs/getConfigs";
import Mode from "~scripts/build/types/mode/mode";
import { TargetType } from "~shared/utils/target/target";

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
  config();
  return getConfigs({ targetType: target, mode });
};

export default setupConfig;
