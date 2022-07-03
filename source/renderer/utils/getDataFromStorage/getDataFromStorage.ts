import store2 from "store2";
import mobileStorage from "~renderer/helpers/mobileStorage/mobileStorage";
import target, { TargetType } from "~shared/constants/target/target";

type GetDataFromStorage = (key: string) => Promise<string | null>;

const getDataFromStorage: GetDataFromStorage = async (
  key: string,
): Promise<string | null> => {
  let item: string | null;
  if (target === TargetType.Mobile) {
    item = await mobileStorage?.get(key);
  } else {
    item = store2.get(key);
  }
  return item;
};

export default getDataFromStorage;
