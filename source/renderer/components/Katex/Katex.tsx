import katex from "katex";
import propTypes from "prop-types";
import {
  useEffect,
  useRef,
  type FunctionComponent,
  type MutableRefObject,
} from "react";
import type KatexProperties from "./Katex.types";

const Katex: FunctionComponent<KatexProperties> = ({
  children,
  ...rest
}: KatexProperties): JSX.Element => {
  const elementReference: MutableRefObject<HTMLDivElement | null> =
    useRef<null | HTMLDivElement>(null);
  useEffect((): void => {
    elementReference.current &&
      katex.render(children, elementReference.current, {
        throwOnError: false,
        ...rest,
      });
  }, [children]);
  return <div ref={elementReference} />;
};

Katex.propTypes = {
  children: propTypes.string.isRequired,
};

export default Katex;
