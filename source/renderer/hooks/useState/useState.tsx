import { useMemo } from "react";
import zustand, { StoreApi, UseBoundStore } from "zustand";

type UseStateArguments<
  T extends {
    value: unknown;
  },
> = {
  value: T["value"];
};

type ZustandArguments<
  T extends {
    value: unknown;
  },
> = UseStateArguments<T> & { setValue: (newState: T["value"]) => void };

const useState = <
  T extends {
    value: unknown;
  },
>({
  value,
}: UseStateArguments<T>): ZustandArguments<T> => {
  const useCommonState: UseBoundStore<StoreApi<ZustandArguments<T>>> =
    useMemo(() => {
      return zustand<ZustandArguments<T>>((set): ZustandArguments<T> => {
        return {
          value,
          setValue: (newValue: T["value"]): void => {
            set((): Pick<UseStateArguments<T>, "value"> => {
              return { value: newValue };
            });
          },
        };
      });
    }, []);
  return useCommonState((state: ZustandArguments<T>): ZustandArguments<T> => {
    return state;
  });
};

export default useState;
