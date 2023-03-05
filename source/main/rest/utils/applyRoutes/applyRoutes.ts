import type { Express } from "express";

type ApplyRoutesArguments = {
  instance: Express;
};

type ApplyRoutes = (argument: ApplyRoutesArguments) => void;

const applyRoutes: ApplyRoutes = ({ instance }: ApplyRoutesArguments): void => {
  // eslint-disable-next-line no-console
  console.log(instance);
};

export default applyRoutes;
