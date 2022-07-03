import { Storage } from "@ionic/storage";
import target, { TargetType } from "~shared/constants/target/target";

type MobileStorage = Storage | undefined;

const getMobileStorage = async () => {
  if (target === TargetType.Mobile) {
    const { Storage } = await import(
      /* webpackChunkName: "mobile" */ "@ionic/storage"
    );
    const mobileStorage = new Storage();
    await mobileStorage.create();
    return mobileStorage;
  } else {
    return;
  }
};

const mobileStorage: MobileStorage = await getMobileStorage();

export default mobileStorage;
