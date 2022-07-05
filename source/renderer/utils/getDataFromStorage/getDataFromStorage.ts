import store2 from "store2";
import mobileStorage from "~renderer/helpers/mobileStorage/mobileStorage";
import target, { TargetType } from "~shared/constants/target/target";

type GetDataFromStorage = (key: string) => Promise<string | null>;

const getDataFromStorage: GetDataFromStorage = async (
  key: string,
): Promise<string | null> => {
  if (target === TargetType.Mobile) {
    return await mobileStorage?.get(key);
  } else {
    return store2.get(key);
  }
};

export default getDataFromStorage;
