import { MDXComponents } from "mdx/types";
import Embed from "react-embed";
import Albicla from "../../components/Albicla/Albicla";
import Chart from "../../components/Chart/Chart";
import Facebook from "../../components/Facebook/Facebook";
import MarkdownCode from "../../components/MarkdownCode/MarkdownCode";
import Reddit from "../../components/Reddit/Reddit";
import Table from "../../components/Table/Table";

const mdxComponentsMapper: MDXComponents = {
  Table,
  code: MarkdownCode,
  Chart,
  Embed,
  Albicla,
  Facebook,
  Reddit,
} as MDXComponents;

export default mdxComponentsMapper;
