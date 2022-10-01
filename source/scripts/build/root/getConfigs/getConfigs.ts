/* eslint-disable sonarjs/no-identical-functions */
import { Configuration } from "webpack";
import getConfig from "~frontend/source/scripts/build/root/getConfig/getConfig";
import ExtendedMode from "~frontend/source/scripts/build/types/extendedMode/extendedMode";
import Mode from "~frontend/source/scripts/build/types/mode/mode";
import { TargetType } from "~frontend/source/shared/constants/target/target";

export type ConfigsMapper = {
  [key in TargetType]: () => Configuration[];
};

type GetConfingsArguments = {
  targetType: TargetType;
  mode: Mode;
};

type GetConfings = (argument: GetConfingsArguments) => Configuration[];

const getConfings: GetConfings = ({
  targetType,
  mode,
}: GetConfingsArguments): Configuration[] => {
  const configs: ConfigsMapper = {
    [TargetType.Web]: () => {
      return [
        getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Web,
        }),
        getConfig({
          mode,
          targetToModern: false,
          extendedMode: ExtendedMode.Web,
        }),
      ];
    },
    [TargetType.Desktop]: () => {
      return [
        getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Main,
        }),
        getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Renderer,
        }),
        getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Preload,
        }),
      ];
    },
    [TargetType.Mobile]: () => {
      return [
        getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Mobile,
        }),
      ];
    },
    [TargetType.OSFree]: () => {
      return [
        getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Main,
        }),
        getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Renderer,
        }),
        getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Preload,
        }),
      ];
    },
  };
  return configs[targetType]();
};

export default getConfings;
