import { useEffect } from "react";
import useJwtStore, { JwtStore } from "../../stores/jwtStore/jwtStore";
import jwtDecode from "jwt-decode";
import { UseJwtDecodeTokenOnChange } from "./useJwtDecodeTokenOnChange.types";

const useJwtDecodeTokenOnChange: UseJwtDecodeTokenOnChange = (): void => {
  const { jwtKey, setJwtPayload }: JwtStore<Record<string, unknown>> =
    useJwtStore();
  useEffect((): void => {
    let newPayload: Record<string, unknown> | null = null;
    if (jwtKey) {
      newPayload = jwtDecode<Record<string, unknown>>(jwtKey);
    }
    setJwtPayload(newPayload);
  }, [jwtKey]);
};

export default useJwtDecodeTokenOnChange;
