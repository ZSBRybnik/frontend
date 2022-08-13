import { MDXComponents } from "mdx/types";
import MarkdownCode from "../../components/MarkdownCode/MarkdownCode";
import Table from "../../components/Table/Table";

const mdxComponentsMapper: MDXComponents = {
  Table,
  code: MarkdownCode,
} as MDXComponents;

export default mdxComponentsMapper;
