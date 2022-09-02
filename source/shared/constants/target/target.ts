export enum TargetType {
  Web = "web",
  Mobile = "mobile",
  Desktop = "desktop",
  OSFree = "osFree",
}

const target: TargetType = process.env.TARGET as TargetType;

export default target;
