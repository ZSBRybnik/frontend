import ReactEmbed from "react-embed";
import { EmbedWrapper } from "./Embed.styles";

type EmbedProperties = {
  url: string;
};

const Embed = ({ url }: EmbedProperties): JSX.Element => {
  return (
    <EmbedWrapper>
      <ReactEmbed url={url} />
    </EmbedWrapper>
  );
};

export default Embed;
