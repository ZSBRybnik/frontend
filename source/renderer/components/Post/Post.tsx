import type { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {
  PostBrief,
  PostImage,
  PostTextWrapper,
  PostTitle,
  PostWrapper,
} from "./Post.styles";
import type PostProperties from "./Post.types";

const Post: FunctionComponent<PostProperties> = ({
  id,
  alt,
  src,
  title,
  brief,
}: PostProperties): JSX.Element => {
  const path: string = `/post/${id}`;
  return (
    <Link to={path}>
      <PostWrapper>
        <PostImage alt={alt} src={src} title={alt} />
        <PostTextWrapper>
          <PostTitle>{title}</PostTitle>
          <PostBrief>{brief}</PostBrief>
        </PostTextWrapper>
      </PostWrapper>
    </Link>
  );
};

export default Post;
