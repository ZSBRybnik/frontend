import { evaluate } from "@mdx-js/mdx";
import { VFileCompatible } from "@mdx-js/mdx/lib/evaluate";
import { useMDXComponents } from "@mdx-js/react";
import runtime from "react/jsx-runtime.js";
import * as provider from "@mdx-js/react";
import { MDXContent, MDXComponents } from "mdx/types";
import { useEffect } from "react";

type OnEvaluateArguments = {
  component: MDXContent;
  mdxComponents: MDXComponents;
};

type UseMDXEvaluateArguments = {
  content?: VFileCompatible;
  onEvaluate?: (argument: OnEvaluateArguments) => void;
};

const useMDXEvaluate = ({ content, onEvaluate }: UseMDXEvaluateArguments) => {
  const mdxComponents = useMDXComponents();
  useEffect(() => {
    if (content) {
      (async () => {
        const { default: Component } = await evaluate(content, {
          ...provider,
          ...runtime,
        } as any);
        onEvaluate && onEvaluate({ component: Component, mdxComponents });
      })();
    }
  }, [content]);
};
export default useMDXEvaluate;
