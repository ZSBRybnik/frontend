import create, { StoreApi, UseBoundStore } from "zustand";

export type JwtStore<T extends Record<string, unknown>> = {
  jwtKey: string | null;
  setJwtKey: (state: JwtStore<T>["jwtKey"]) => void;
  jwtPayload: T | null;
  setJwtPayload: (state: JwtStore<T>["jwtPayload"]) => void;
};

const useJwtStore: UseBoundStore<StoreApi<JwtStore<Record<string, unknown>>>> =
  create<JwtStore<Record<string, unknown>>>((set) => {
    return {
      jwtKey: null,
      jwtPayload: null,
      setJwtKey: (value: JwtStore<Record<string, unknown>>["jwtKey"]): void => {
        set(() => {
          return { jwtKey: value };
        });
      },
      setJwtPayload: (
        value: JwtStore<Record<string, unknown>>["jwtPayload"],
      ): void => {
        set(() => {
          return { jwtPayload: value };
        });
      },
    };
  });

export default useJwtStore;
