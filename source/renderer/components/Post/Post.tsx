import { Link } from "react-router-dom";
import {
  PostImage,
  PostBrief,
  PostTextWrapper,
  PostTitle,
  PostWrapper,
} from "./Post.styles";

type PostProperties = {
  id: number;
  title: string;
  brief: string;
  src?: string;
  alt?: string;
};

const Post = ({ id, alt, src, title, brief }: PostProperties) => {
  const path: string = `/post/${id}`;
  return (
    <>
      <Link to={path}>
        <PostWrapper>
          <PostImage alt={alt} src={src} title={alt} />
          <PostTextWrapper>
            <PostTitle>{title}</PostTitle>
            <PostBrief>{brief}</PostBrief>
          </PostTextWrapper>
        </PostWrapper>
      </Link>
    </>
  );
};
export default Post;
