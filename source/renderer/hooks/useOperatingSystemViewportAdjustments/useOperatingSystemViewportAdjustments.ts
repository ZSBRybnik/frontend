import { useMemo } from "react";
import SuperExpressive from "super-expressive";
import target, {
  TargetType,
} from "~frontend/source/shared/constants/target/target";
import useOperatingSystemInformation from "../useOperatingSystemInformation/useOperatingSystemInformation";

const useOperatingSystemViewportAdjustments = () => {
  const { value } = useOperatingSystemInformation();
  return useMemo(() => {
    const { distro, platform } = value ?? {
      platform: null,
      distro: null,
    };
    const windows11Regex = SuperExpressive().string("11").toRegex();
    return {
      rounded:
        target === TargetType.Desktop &&
        (platform === "darwin" ||
          (platform === "win32" && windows11Regex.test(distro))),
    };
  }, [value]);
};

export default useOperatingSystemViewportAdjustments;
