/* eslint-disable sonarjs/no-identical-functions */
import { Configuration } from "webpack";
import getConfig from "~frontend/source/scripts/build/root/getConfig/getConfig";
import ExtendedMode from "~frontend/source/scripts/build/types/extendedMode/extendedMode";
import Mode from "~frontend/source/scripts/build/types/mode/mode";
import { TargetType } from "~frontend/source/shared/constants/target/target";

export type ConfigsMapper = {
  [key in TargetType]: () => Promise<Configuration[]>;
};

type GetConfingsArguments = {
  targetType: TargetType;
  mode: Mode;
};

type GetConfings = (argument: GetConfingsArguments) => Promise<Configuration[]>;

const getConfings: GetConfings = async ({
  targetType,
  mode,
}: GetConfingsArguments): Promise<Configuration[]> => {
  const configs: ConfigsMapper = {
    [TargetType.Web]: async () => {
      return [
        await getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Web,
        }),
        mode !== Mode.Development &&
          (await getConfig({
            mode,
            targetToModern: false,
            extendedMode: ExtendedMode.Web,
          })),
      ].filter(Boolean) as unknown as Promise<Configuration[]>;
    },
    [TargetType.Desktop]: async () => {
      return [
        await getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Main,
        }),
        /*await getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Renderer,
        }),*/
        await getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Preload,
        }),
      ];
    },
    [TargetType.Mobile]: async () => {
      return [
        await getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Mobile,
        }),
      ];
    },
    [TargetType.OSFree]: async () => {
      return [
        await getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Main,
        }),
        await getConfig({
          mode,
          targetToModern: true,
          extendedMode: ExtendedMode.Renderer,
        }),
        await getConfig({
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
