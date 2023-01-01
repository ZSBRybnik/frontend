import Head from "next/head";
import { PageWrapper } from "~frontend/source/renderer/components/Page/Page.styles";
import propTypes from "prop-types";
import {
  PageProperties,
  PageComponent,
} from "~frontend/source/renderer/components/Page/Page.types";

const Page: PageComponent = ({
  title,
  ...rest
}: PageProperties): JSX.Element => {
  const titleWithDash: string = ` - ${title}`;
  const fixedTitle: string = `ZSB Rybnik${title ? titleWithDash : ""}`;
  return (
    <>
      <Head>
        <title>{fixedTitle}</title>
        <meta name="og:title" content={fixedTitle} />
      </Head>
      <PageWrapper {...rest} />
    </>
  );
};

Page.propTypes = {
  noBackground: propTypes.bool,
  noVerticalPadding: propTypes.bool,
  defaultChildrenVerticalMargin: propTypes.number,
  title: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default Page;
