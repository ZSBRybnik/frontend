/* eslint-disable react-hooks/rules-of-hooks */
import mousetrap from "mousetrap";
import { useCallback, useEffect, useMemo } from "react";
import ExtendedWindow from "~frontend/source/shared/types/extendedWindow/extendedWindow";

const useToggleMaximizeShortcut = () => {
  const toggleMaximizeShortcutCallback = useCallback(() => {
    (window as ExtendedWindow).api?.toggleMaximize();
  }, []);
  const toggleMaximizeShortcutKeys = useMemo(() => {
    return ["command+c", "ctrl+c"];
  }, []);
  useEffect(() => {
    const closeShortcut = mousetrap.bind(
      toggleMaximizeShortcutKeys,
      toggleMaximizeShortcutCallback,
    );
    return () => {
      closeShortcut.unbind(toggleMaximizeShortcutKeys);
    };
  }, []);
};
export default useToggleMaximizeShortcut;
