import propTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { PageWrapper } from "~frontend/source/renderer/components/Page/Page.styles";
import {
  PageComponent,
  PageProperties,
} from "~frontend/source/renderer/components/Page/Page.types";

const Page: PageComponent = ({
  title,
  ...rest
}: PageProperties): JSX.Element => {
  const titleWithDash: string = ` - ${title}`;
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
