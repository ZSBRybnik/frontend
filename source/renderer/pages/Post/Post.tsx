/* eslint-disable max-params */
import { useParams } from "react-router-dom";
import {
  Post as PostType,
  User,
  PostContentItem,
} from "~backend/node_modules/@prisma/postgresql";
import Routes from "~backend/source/server/trpc/constants/routes/routes";
import Page from "../../components/Page/Page";
import useCallAPI from "../../hooks/useCallAPI/useCallAPI";
import useState from "~frontend/source/renderer/hooks/useState/useState";
import useMDXEvaluate from "../../hooks/useMDXEvaluate/useMDXEvaluate";

const Post = () => {
  const { id = "0" } = useParams();
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
    content: PostContentItem[];
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
  );
};

export default Post;
