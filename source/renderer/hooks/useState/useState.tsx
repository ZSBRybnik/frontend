import zustand, { StoreApi, UseBoundStore } from "zustand";

type UseStateArguments<
  T extends {
    value: unknown;
  },
> = {
  value: T["value"];
  setValue: (value: T["value"]) => void;
};

const useState = <
  T extends {
    value: unknown;
  },
>({
  value,
}: UseStateArguments<T>): UseStateArguments<T> => {
  const useCommonState: UseBoundStore<StoreApi<UseStateArguments<T>>> = zustand<
    UseStateArguments<T>
  >((set): UseStateArguments<T> => {
    return {
      value,
      setValue: (newValue: T["value"]): void => {
        set((): Pick<UseStateArguments<T>, "value"> => {
          return { value: newValue };
        });
      },
    };
  });
  return useCommonState((state: UseStateArguments<T>): UseStateArguments<T> => {
    return state;
  });
};
