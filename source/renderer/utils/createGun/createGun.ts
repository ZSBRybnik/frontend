import { IGunInstance } from "gun/types";
import target, {
  TargetType,
} from "~frontend/source/shared/constants/target/target";
import { CreateGun } from "./createGun.types";

const createGun: CreateGun = (): IGunInstance => {
  return Gun(
    [
      "http://localhost:3000/gun",
      target === TargetType.Desktop && "http://localhost:10000/gun",
    ].filter(Boolean),
  );
};

export default createGun;
