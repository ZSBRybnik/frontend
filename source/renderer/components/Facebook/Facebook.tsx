import { FC } from "react";
import { Iframe } from "./Facebook.styles";

type FacebookProperties = {
  url: string;
};

const Facebook: FC<FacebookProperties> = ({
  url,
}: FacebookProperties): JSX.Element => {
  return (
    <Iframe
      src={url}
      height="781"
      scrolling="no"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  );
};

export default Facebook;
