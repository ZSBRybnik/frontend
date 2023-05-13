import { FC } from "react";
import { Iframe } from "./LinkedIn.styles";

type LinkedInProperties = {
  url: string;
};

const LinkedIn: FC<LinkedInProperties> = ({
  url,
}: LinkedInProperties): JSX.Element => {
  return (
    <Iframe
      src={url}
      height="314"
      width="504"
      frameBorder="0"
      allowFullScreen
      title="Osadzona publikacja"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  );
};

export default LinkedIn;
