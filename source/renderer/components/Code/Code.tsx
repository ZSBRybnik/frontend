import { Prism } from "react-syntax-highlighter";
import propTypes from "prop-types";
import {
  CodeComponent,
  CodeProperties,
} from "~frontend/source/renderer/components/Code/Code.types";

const Code: CodeComponent = (properties: CodeProperties): JSX.Element => {
  return <Prism {...properties} />;
};

Code.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.arrayOf(propTypes.string.isRequired),
  ]).isRequired,
  language: propTypes.string.isRequired,
};

export default Code;
