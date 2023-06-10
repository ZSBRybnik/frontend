import type { MDXComponents } from "mdx/types";
import { lazy } from "react";

const MarkdownCode = lazy(
  (): Promise<
    typeof import("~frontend/source/renderer/components/MarkdownCode/MarkdownCode")
  > => {
    return new Promise((resolve) => {
      resolve(
        import(
          "~frontend/source/renderer/components/MarkdownCode/MarkdownCode"
        ),
      );
    });
  },
);

const Facebook = lazy(
  (): Promise<
    typeof import("~frontend/source/renderer/components/Facebook/Facebook")
  > => {
    return new Promise((resolve) => {
      resolve(import("~frontend/source/renderer/components/Facebook/Facebook"));
    });
  },
);

const Embed = lazy((): Promise<typeof import("react-embed")> => {
  return new Promise((resolve) => {
    resolve(import("react-embed"));
  });
});

const LinkedIn = lazy(
  (): Promise<
    typeof import("~frontend/source/renderer/components/LinkedIn/LinkedIn")
  > => {
    return new Promise((resolve) => {
      resolve(import("~frontend/source/renderer/components/LinkedIn/LinkedIn"));
    });
  },
);

const Albicla = lazy(
  (): Promise<
    typeof import("~frontend/source/renderer/components/Albicla/Albicla")
  > => {
    return new Promise((resolve) => {
      resolve(import("~frontend/source/renderer/components/Albicla/Albicla"));
    });
  },
);

const Chart = lazy(
  (): Promise<
    typeof import("~frontend/source/renderer/components/Chart/Chart")
  > => {
    return new Promise((resolve) => {
      resolve(import("~frontend/source/renderer/components/Chart/Chart"));
    });
  },
);

const Katex = lazy(
  (): Promise<
    typeof import("~frontend/source/renderer/components/Katex/Katex")
  > => {
    return new Promise((resolve) => {
      resolve(import("~frontend/source/renderer/components/Katex/Katex"));
    });
  },
);

const Table = lazy(
  (): Promise<
    typeof import("~frontend/source/renderer/components/Table/Table")
  > => {
    return new Promise((resolve) => {
      resolve(import("~frontend/source/renderer/components/Table/Table"));
    });
  },
);

const Reddit = lazy(
  (): Promise<
    typeof import("~frontend/source/renderer/components/Reddit/Reddit")
  > => {
    return new Promise((resolve) => {
      resolve(import("~frontend/source/renderer/components/Reddit/Reddit"));
    });
  },
);

const mdxComponentsMapper: MDXComponents = {
  Table,
  code: MarkdownCode,
  Chart,
  Embed,
  Albicla,
  Facebook,
  Reddit,
  Katex,
  LinkedIn,
} as MDXComponents;

export default mdxComponentsMapper;
