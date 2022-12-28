/* eslint-disable max-params */
import csv from "csvtojson";
import { useEffect } from "react";
import useState from "../useState/useState";

type UseCSVToJsonArguments = {
  content: string;
};

const useCSVToJson = ({ content }: UseCSVToJsonArguments) => {
  const { value, setValue } = useState<{
    value: unknown;
  }>({
    value: null,
  });
  useEffect(() => {
    (async () => {
      const convertResult = (await csv().fromString(content)).reduce(
        (accumulator, value) => {
          const keys = Object.keys(value);
          keys.forEach((key) => {
            accumulator[key] = [...(accumulator[key] ?? []), value[key]];
          });
          return accumulator;
        },
        {},
      );
      setValue(convertResult);
    })();
  }, [content]);
  return { value };
};

export default useCSVToJson;
