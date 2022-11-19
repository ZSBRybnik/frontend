import { MDXComponents } from "mdx/types";
import Embed from "react-embed";
import Albicla from "../../components/Albicla/Albicla";
import Chart from "../../components/Chart/Chart";
import MarkdownCode from "../../components/MarkdownCode/MarkdownCode";
import Table from "../../components/Table/Table";
import TikTok from "../../components/TikTok/TikTok";

const mdxComponentsMapper: MDXComponents = {
  Table,
  code: MarkdownCode,
  Chart,
  TikTok,
  Embed,
  Albicla,
} as MDXComponents;

export default mdxComponentsMapper;
