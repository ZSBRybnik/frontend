import propTypes from "prop-types";
import { FC } from "react";
import { Iframe } from "./Albicla.styles";

type AlbiclaProperties = {
  url: string;
};

const Albicla: FC<AlbiclaProperties> = ({
  url,
}: AlbiclaProperties): JSX.Element => {
  return (
    <Iframe
      src={url}
      title={url}
      height="301"
      scrolling="no"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  );
};

Albicla.propTypes = {
  url: propTypes.string.isRequired,
};

export default Albicla;
