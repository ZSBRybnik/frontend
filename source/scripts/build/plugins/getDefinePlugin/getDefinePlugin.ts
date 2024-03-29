import { sync } from "glob";
import { join } from "path";
import { DefinePlugin } from "webpack";
import projectDependencies from "~frontend/source/scripts/build/constants/projectDependencies/projectDependencies";
import projectsDependenciesVersions from "~frontend/source/scripts/build/constants/projectsDependenciesVersions/projectsDependenciesVersions";
import ExtendedMode from "~frontend/source/scripts/build/types/extendedMode/extendedMode";
import Mode from "~frontend/source/scripts/build/types/mode/mode";
import { TargetType } from "~frontend/source/shared/constants/target/target";

type GetLocalizedLanguages = () => string[];

const getLocalizedLanguages: GetLocalizedLanguages = (): string[] => {
  const files: string[] = sync(
    join(process.cwd(), "source", "public", "static", "locales", "**/??.json"),
  );
  return files.map((file: string): string => file.split(".")[0].slice(-2));
};

type GetDefinePluginArguments = {
  mode: Mode;
  targetToModern: boolean;
  extendedMode: ExtendedMode;
  publicURL: string;
};

type GetDefinePlugin = (argument: GetDefinePluginArguments) => DefinePlugin;

const getDefinePlugin: GetDefinePlugin = ({
  mode,
  targetToModern,
  publicURL,
  extendedMode,
}: GetDefinePluginArguments): DefinePlugin => {
  const mobileOrWebTarget =
    extendedMode === ExtendedMode.Mobile ? TargetType.Mobile : TargetType.Web;
  return new DefinePlugin({
    "process.env.DEVELOPMENT": JSON.stringify(mode === Mode.Development),
    "process.env.MODERN": JSON.stringify(targetToModern),
    "process.env.TARGET": JSON.stringify(
      [ExtendedMode.Renderer, ExtendedMode.Preload, ExtendedMode.Main].includes(
        extendedMode,
      )
        ? TargetType.Desktop
        : mobileOrWebTarget,
    ),
    "process.env.PUBLIC_URL": JSON.stringify(publicURL),
    "process.env.WEBSOCKET_URL": JSON.stringify(process.env.WEBSOCKET_URL),
    "process.env.LOCALIZED_LANGUAGES": JSON.stringify(getLocalizedLanguages()),
    "process.env.GOOGLE_ANALYTICS_ID": JSON.stringify(
      process.env.GOOGLE_ANALYTICS_ID,
    ),
    "process.env.STRIPE_KEY": JSON.stringify(process.env.STRIPE_KEY),
    "process.env.STRIPE_PUBLISH_KEY": JSON.stringify(
      process.env.STRIPE_PUBLISH_KEY,
    ),
    "process.env.PROJECT_DEPENDENSIES": JSON.stringify(projectDependencies),
    "process.env.PROJECT_DEPENDENSIES_VERSIONS": JSON.stringify(
      projectsDependenciesVersions,
    ),
    "process.env.FAUNADB_KEY": JSON.stringify(process.env.FAUNADB_KEY),
  });
};

export default getDefinePlugin;
