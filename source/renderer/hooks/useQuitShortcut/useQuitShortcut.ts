import mousetrap from "mousetrap";
import { useCallback, useEffect, useMemo } from "react";
import ExtendedWindow from "~frontend/source/shared/types/extendedWindow/extendedWindow";

const useQuitShortcut = () => {
  const closeShortcutCallback = useCallback(() => {
    (window as ExtendedWindow).api?.close();
  }, []);
  const closeShortcutKeys = useMemo(() => {
    return ["command+q", "ctrl+q"];
  }, []);
  useEffect(() => {
    const closeShortcut = mousetrap.bind(
      closeShortcutKeys,
      closeShortcutCallback,
    );
    return () => {
      closeShortcut.unbind(closeShortcutKeys);
    };
  }, []);
};
export default useQuitShortcut;
