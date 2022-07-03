import { useState } from "@hookstate/core";
import { useCallback } from "react";

type UseFallbackImageArguments = {
  source: string;
  fallback: string[] | string;
};

const useFallbackImage = ({ source, fallback }: UseFallbackImageArguments) => {
  const arraySourcesCounterState = useState(0);
  const imageSourceState = useState(source);
  const setFallbackImage = useCallback(() => {
    const isFallbackArray: boolean = Array.isArray(fallback);
    const fallbackArrayLength = fallback.length;
    if (
      isFallbackArray &&
      fallbackArrayLength - 1 > arraySourcesCounterState.get()
    ) {
      arraySourcesCounterState.set(arraySourcesCounterState.get() + 1);
    }
    imageSourceState.set(
      isFallbackArray
        ? fallback[arraySourcesCounterState.get()]
        : (fallback as string),
    );
  }, []);
  return {
    setFallbackImage,
  };
};

export default useFallbackImage;
