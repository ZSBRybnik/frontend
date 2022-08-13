import MDX from "@mdx-js/runtime";
import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "../../components/AppProvider/AppProvider";

const Subpage: FunctionComponent = () => {
  const { name } = useParams();
  const { data } = useQuery(["page", { name }]);
  const { content }: { content: string } = Object(data);
  return <MDX>{content}</MDX>;
};

export default Subpage;
