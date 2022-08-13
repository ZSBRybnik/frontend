import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet-async";
import { PageWrapper } from "./Page.styles";

type PageProperties = PropsWithChildren<{ title?: string }>;

const Page = ({ title, ...rest }: PageProperties) => {
  const titleWithDash = ` - ${title}`;
  const fixedTitle: string = `ZSB Rybnik${title ? titleWithDash : ""}`;
  return (
    <>
      <Helmet>
        <title>{fixedTitle}</title>
        <meta name="og:title" content={fixedTitle} />
      </Helmet>
      <PageWrapper {...rest} />
    </>
  );
};

export default Page;
