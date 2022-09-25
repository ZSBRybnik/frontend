import store2 from "store2";
import mobileStorage from "~frontend/source/renderer/helpers/mobileStorage/mobileStorage";
import target, {
  TargetType,
} from "~frontend/source/shared/constants/target/target";

type GetDataFromStorageArguments = {
  key: string;
};

type GetDataFromStorage = (
  argument: GetDataFromStorageArguments,
) => Promise<string | null>;

const getDataFromStorage: GetDataFromStorage = async ({
  key,
}: GetDataFromStorageArguments): Promise<string | null> => {
  if (target === TargetType.Mobile) {
    return await mobileStorage?.get(key);
  } else {
    return store2.get(key);
  }
};

export default getDataFromStorage;
