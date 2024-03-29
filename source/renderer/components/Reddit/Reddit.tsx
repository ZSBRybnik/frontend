import { FC } from "react";
import { Iframe } from "./Reddit.styles";

type RedditProperties = {
  url: string;
};

const Reddit: FC<RedditProperties> = ({
  url,
}: RedditProperties): JSX.Element => {
  return (
    <Iframe
      src={url}
      height="182"
      scrolling="no"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  );
};

export default Reddit;
