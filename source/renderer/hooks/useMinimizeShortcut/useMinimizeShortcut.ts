import mousetrap from "mousetrap";
import { useCallback, useEffect, useMemo } from "react";
import ExtendedWindow from "~frontend/source/shared/types/extendedWindow/extendedWindow";

const useMinimizeShortcut = () => {
  const minimizeShortcutCallback = useCallback(() => {
    (window as ExtendedWindow).api?.minimize();
  }, []);
  const minimizeShortcutKeys = useMemo(() => {
    return ["command+m", "ctrl+m"];
  }, []);
  useEffect(() => {
    const closeShortcut = mousetrap.bind(
      minimizeShortcutKeys,
      minimizeShortcutCallback,
    );
    return () => {
      closeShortcut.unbind(minimizeShortcutKeys);
    };
  }, []);
};
export default useMinimizeShortcut;
