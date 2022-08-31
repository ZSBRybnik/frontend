/* eslint-disable react-hooks/rules-of-hooks */
import mousetrap from "mousetrap";
import { useCallback, useEffect, useMemo } from "react";
import ExtendedWindow from "~frontend/source/shared/types/extendedWindow/extendedWindow";

const useToggleFullscreenShortcut = () => {
  const toggleFullscreenCallback = useCallback(() => {
    (window as ExtendedWindow).api?.toggleFullscreen();
  }, []);
  const toggleFullscreenShortcutKeys = useMemo(() => {
    return ["f11"];
  }, []);
  useEffect(() => {
    const toggleFullscreenShortcut = mousetrap.bind(
      toggleFullscreenShortcutKeys,
      toggleFullscreenCallback,
    );
    return () => {
      toggleFullscreenShortcut.unbind(toggleFullscreenShortcutKeys);
    };
  }, []);
};
export default useToggleFullscreenShortcut;
