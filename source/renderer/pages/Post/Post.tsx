import { useParams } from "react-router-dom";
import { useQuery } from "~renderer/components/AppProvider/AppProvider";
import Page from "../../components/Page/Page";

const Post = () => {
  const { name } = useParams();
  const { data, isLoading } = useQuery(["page", { name }]);
  const {
    content,
    title,
    author,
  }: { content: string; title: string; author: string } = Object(data);
  return (
    <Page title={title}>
      {!isLoading && (
        <>
          {content}
          <br />
          <div>{author}</div>
        </>
      )}
    </Page>
  );
};

export default Post;
