/* eslint-disable max-params */
/*import { useParams } from "react-router-dom";
import {
  Post as PostType,
  User,
  ContentItem,
} from "~backend/node_modules/@prisma/postgresql";
import Routes from "~backend/source/server/trpc/constants/routes/routes";
import useCallAPI from "~frontend/source/renderer/hooks/useCallAPI/useCallAPI";
import useMDXEvaluate from "~frontend/source/renderer/hooks/useMDXEvaluate/useMDXEvaluate";
import useState from "~frontend/source/renderer/hooks/useState/useState";
import Page from "../../Page/Page";
*/
const Post = () => {
  /*const { id = "0" } = useParams();
  const { value: content, setValue: setContent } = useState<{
    value: JSX.Element[];
  }>({ value: [] });
  const { data } = useCallAPI<PostType>({
    indexName: "posts_by_id",
    indexValue: parseInt(id),
    gunKey: "posts",
    trpcRoute: Routes.GetPost,
    trpcPayload: {
      id: parseInt(id),
    },
  });
  const {
    title,
    author: authorObject,
    content: dataContent,
  }: PostType & {
    author: Pick<User, "login">;
    content: ContentItem[];
  } = Object(data);
  const { login: author } = Object(authorObject);
  useMDXEvaluate({
    content: dataContent,
    onEvaluate: ({ content }) => {
      setContent(content);
    },
  });
  return (
    <Page title={title}>
      {content && (
        <>
          {content}
          <br />
          <div>{author}</div>
        </>
      )}
    </Page>
  );*/
  return <>123</>;
};

export default Post;
