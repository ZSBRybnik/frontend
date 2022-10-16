import { FunctionComponent } from "react";
import Code from "../Code/Code";
import { CodeProperties } from "../Code/Code.types";

type MarkdownCodeProperties = {
  className: string;
} & Pick<CodeProperties, "children">;

const MarkdownCode: FunctionComponent<MarkdownCodeProperties> = ({
  className,
  ...rest
}: MarkdownCodeProperties): JSX.Element => {
  let fixedLang: string;
  try {
    fixedLang = className.replace("language-", "");
  } catch (err) {
    fixedLang = className;
  }
  return <Code {...rest} language={fixedLang} />;
};

export default MarkdownCode;
