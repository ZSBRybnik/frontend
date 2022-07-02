import { merge } from "lodash";
import {
  dependencies as rootDependencies,
  devDependencies as rootDevelopmentDependencies,
} from "~root/package.json";
import { peerDependencies as nativeAddonGolangPeerDependencies } from "~root/src/native-addon-go/package.json";
import { devDependencies as nativeAddonRustDevelopmentDependencies } from "~root/src/native-addon-rust/package.json";

type ProjectsDependenciesVersions = {
  [key in
    | keyof typeof rootDependencies
    | keyof typeof rootDevelopmentDependencies
    | keyof typeof nativeAddonRustDevelopmentDependencies
    | keyof typeof nativeAddonGolangPeerDependencies]: string;
};

const projectsDependenciesVersions: ProjectsDependenciesVersions = merge(
  rootDependencies,
  rootDevelopmentDependencies,
  nativeAddonRustDevelopmentDependencies,
  nativeAddonRustDevelopmentDependencies,
  nativeAddonGolangPeerDependencies,
) as ProjectsDependenciesVersions;

export default projectsDependenciesVersions;
