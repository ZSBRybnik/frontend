import ExtendedMode from "~frontend/source/scripts/build/types/extendedMode/extendedMode";

const extendedModesWithNextJSCompilation = new Set<ExtendedMode>([
  ExtendedMode.Web,
  ExtendedMode.Renderer,
  ExtendedMode.Mobile,
]);

export default extendedModesWithNextJSCompilation;
