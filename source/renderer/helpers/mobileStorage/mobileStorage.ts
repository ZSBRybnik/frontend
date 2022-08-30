import type { Storage } from "@ionic/storage";
import target, {
  TargetType,
} from "~frontend/source/shared/constants/target/target";

type MobileStorage = Storage | null;

const getMobileStorage = async (): Promise<MobileStorage> => {
  if (target === TargetType.Mobile) {
    const { Storage } = await import(
      /* webpackChunkName: "mobile" */ "@ionic/storage"
    );
    const mobileStorage: Storage = new Storage();
    await mobileStorage.create();
    return mobileStorage;
  } else {
    return null;
  }
};

const mobileStorage: MobileStorage = await getMobileStorage();

export default mobileStorage;
