import { FunctionComponent } from "react";
import { Prism } from "react-syntax-highlighter";

export type CodeProperties = {
  children: string | string[];
  language: string;
};

const Code: FunctionComponent<CodeProperties> = ({
  ...rest
}: CodeProperties): JSX.Element => {
  return <Prism {...rest} />;
};

export default Code;
