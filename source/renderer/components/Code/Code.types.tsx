import { WeakValidationMap } from "react";

export type CodeProperties = {
  children: string | string[];
  language: string;
};

export type CodeComponent = {
  (properties: CodeProperties): JSX.Element;
  propTypes: WeakValidationMap<CodeProperties>;
};
