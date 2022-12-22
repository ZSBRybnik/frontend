import { useMDXComponents } from "@mdx-js/react";
import { useEffect } from "react";
import { EvaluateOptions } from "@mdx-js/mdx";
import { ContentItem } from "~backend/node_modules/@prisma/postgresql";
import reactRuntime from "react/jsx-runtime.js";

type OnEvaluateArguments = {
  content: JSX.Element[];
};

type UseMDXEvaluateArguments = {
  content?: Pick<ContentItem, "content" | "runtime" | "id">[];
  onEvaluate?: (argument: OnEvaluateArguments) => void;
};

const useMDXEvaluate = ({ content, onEvaluate }: UseMDXEvaluateArguments) => {
  const mdxComponents = useMDXComponents();
  useEffect(() => {
    if (content?.length) {
      (async () => {
        const transformedContentPromises = content.map(
          // eslint-disable-next-line max-params
          async ({ content, runtime, id: contentId }, index) => {
            if (runtime === "classic") {
              const mdxImportPromise = import(
                /* webpackChunkName: "classic-runtime" */ "@mdx-js/mdx"
              );
              const mdxProviderImportPromise = import(
                /* webpackChunkName: "classic-runtime" */ "@mdx-js/react"
              );
              const [{ evaluate }, provider] = await Promise.all([
                mdxImportPromise,
                mdxProviderImportPromise,
              ]);
              const { default: Component } = await evaluate(content, {
                ...provider,
                ...reactRuntime,
              } as unknown as EvaluateOptions);
              return (
                <Component
                  key={`${contentId}-${index}`}
                  components={mdxComponents}
                />
              );
            }
            if (runtime === "legacy") {
              const compilerImportPromise = import(
                /* webpackChunkName: "legacy-runtime" */ "markdown-to-jsx"
              );
              const mdxLegacyComponentMapperImportPromise = import(
                /* webpackChunkName: "legacy-runtime" */
                "../../constants/mdxLegacyComponentMapper/mdxLegacyComponentMapper"
              );
              const [{ compiler }, { default: mdxLegacyComponentMapper }] =
                await Promise.all([
                  compilerImportPromise,
                  mdxLegacyComponentMapperImportPromise,
                ]);
              return compiler(content, mdxLegacyComponentMapper);
            }
            return <></>;
          },
        );
        const transformedContent = await Promise.all(
          transformedContentPromises,
        );
        onEvaluate && onEvaluate({ content: transformedContent });
      })();
    }
  }, [content]);
};
export default useMDXEvaluate;
