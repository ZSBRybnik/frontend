import { useCallback } from "react";
import { create, StoreApi, UseBoundStore } from "zustand";

type UseFallbackImageArguments = {
  source: string;
  fallback: string[] | string;
};

type ArraySourcesCounterState = {
  value: number;
  incrementValue: () => void;
};

type ImageSourceState = {
  value: string;
  setValue: ({ value }: { value: string }) => void;
};

const useFallbackImage = ({ source, fallback }: UseFallbackImageArguments) => {
  const useArraySourcesCounterState: UseBoundStore<
    StoreApi<ArraySourcesCounterState>
  > = create<ArraySourcesCounterState>((set) => {
    return {
      value: 0,
      incrementValue: () => {
        set(({ value: oldValue }) => {
          return { value: oldValue + 1 };
        });
      },
    };
  });
  const useImageSourceState: UseBoundStore<StoreApi<ImageSourceState>> =
    create<ImageSourceState>((set) => {
      return {
        value: source,
        setValue: ({ value }) => {
          set(() => {
            return { value };
          });
        },
      };
    });
  const { value: imageSource, setValue: setImageSource }: ImageSourceState =
    useImageSourceState();
  const {
    value: arraySourcesCounter,
    incrementValue: incrementArraySourcesCounter,
  }: ArraySourcesCounterState = useArraySourcesCounterState();
  const setFallbackImage = useCallback(() => {
    const isFallbackArray: boolean = Array.isArray(fallback);
    const { length: fallbackArrayLength } = fallback;
    if (isFallbackArray && fallbackArrayLength - 1 > arraySourcesCounter) {
      incrementArraySourcesCounter();
    }
    setImageSource({
      value: isFallbackArray
        ? fallback[arraySourcesCounter]
        : (fallback as string),
    });
  }, [fallback]);
  return {
    imageSource,
    setFallbackImage,
  };
};

export default useFallbackImage;
