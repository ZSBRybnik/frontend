import { FC, ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { TikTokWrapper } from "./TikTok.styles";

interface TikTokProps {
  children: ReactNode;
}

const TikTok: FC<TikTokProps> = ({ children }: TikTokProps): JSX.Element => {
  return (
    <TikTokWrapper>
      <Helmet>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </Helmet>
      {children}
    </TikTokWrapper>
  );
};

export default TikTok;
