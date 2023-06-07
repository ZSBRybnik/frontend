import propTypes from "prop-types";
import { FC } from "react";
import { Iframe } from "./LinkedIn.styles";
import LinkedInProperties from "./LinkedIn.types";

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

LinkedIn.propTypes = {
  url: propTypes.string.isRequired,
};

export default LinkedIn;
