import { CapacitorConfig as CapacitorConfigToFixed } from "@capacitor/cli";
import { address } from "ip";
import "tsconfig-paths/register";
import "typescript-transform-paths/register";

type CapacitorConfig = CapacitorConfigToFixed & {
  SplashScreen?: { launchAutoHide?: boolean };
};

const config: CapacitorConfig = {
  appId: "io.ionic.zsbrybnik",
  appName: "ZSB Rybnik",
  webDir: "destination",
  server:
    process.env.DEVELOPMENT === "true"
      ? {
          url: `http://${address()}:8080`,
          cleartext: true,
        }
      : undefined,
};

export default config;
