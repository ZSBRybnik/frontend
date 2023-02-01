import { useEffect } from "react";
import { Systeminformation } from "systeminformation";
import ExtendedWindow from "~frontend/source/shared/types/extendedWindow/extendedWindow";
import useState from "../useState/useState";

const useOperatingSystemInformation = () => {
  const { value, setValue } = useState<{
    value: null | Systeminformation.OsData;
  }>({
    value: null,
  });
  useEffect(() => {
    (async () => {
      setValue(
        (await (
          window as ExtendedWindow
        ).api?.getOperatingSystemInformation()) ?? null,
      );
    })();
  }, []);
  return { value };
};

export default useOperatingSystemInformation;
