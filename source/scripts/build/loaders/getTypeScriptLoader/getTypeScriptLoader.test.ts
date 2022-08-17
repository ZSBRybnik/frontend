import { sep } from "path";
import source from "~scripts/build/constants/source/source";
import getTypeScriptLoader from "~scripts/build/loaders/getTypeScriptLoader/getTypeScriptLoader";
import Mode from "~scripts/build/types/mode/mode";

describe("getTypeScriptLoader", () => {
  it("should inlucde codebase", () => {
    const { include } = getTypeScriptLoader({
      targetToModern: true,
      mode: Mode.Production,
    });
    const lastFolders: (string | undefined)[] = include.map((folder) => {
      return folder.split(sep).pop();
    });
    expect(lastFolders).toEqual(expect.arrayContaining([source, "backend"]));
  });
  it("should match TypeScript", () => {
    const { test } = getTypeScriptLoader({
      targetToModern: true,
      mode: Mode.Production,
    });
    const testRegex = test.toString();
    expect(testRegex).toContain("ts");
  });
  it("should match TypeScript with JSX", () => {
    const { test } = getTypeScriptLoader({
      targetToModern: true,
      mode: Mode.Production,
    });
    const testRegex = test.toString();
    expect(testRegex).toContain("tsx");
  });
  it("should match JavaScript", () => {
    const { test } = getTypeScriptLoader({
      targetToModern: true,
      mode: Mode.Production,
    });
    const testRegex = test.toString();
    expect(testRegex).toContain("js");
  });
  it("should use babel-loader as the loader", () => {
    const { use } = getTypeScriptLoader({
      targetToModern: true,
      mode: Mode.Production,
    });
    const { loader } = use[0];
    expect(loader).toStrictEqual("babel-loader");
  });
});
