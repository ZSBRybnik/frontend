import katex, { type KatexOptions } from "katex";
import { FC, useEffect, useRef } from "react";

type KatexProperties = {
  children: string;
} & Omit<KatexOptions, "throwOnError" | "macros">;

const Katex: FC<KatexProperties> = ({
  children,
  ...rest
}: KatexProperties): JSX.Element => {
  const elementReference = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    elementReference.current &&
      katex.render(children, elementReference.current, {
        throwOnError: false,
        ...rest,
      });
  }, [children]);
  return <div ref={elementReference} />;
};

export default Katex;
