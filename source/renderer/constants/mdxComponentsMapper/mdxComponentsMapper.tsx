import { MDXComponents } from "mdx/types";
import Chart from "../../components/Chart/Chart";
import MarkdownCode from "../../components/MarkdownCode/MarkdownCode";
import Table from "../../components/Table/Table";

const mdxComponentsMapper: MDXComponents = {
  Table,
  code: MarkdownCode,
  Chart,
} as MDXComponents;

export default mdxComponentsMapper;
