import styled from "@emotion/styled";
import { PageProperties } from "./Page";

type PageWrapperProperties = Pick<
  PageProperties,
  "noBackground" | "noVerticalPadding"
>;

export const PageWrapper = styled.div<PageWrapperProperties>`
  margin: 0;
  height: fit-content;
  background: ${({ noBackground }) => {
    return noBackground ? "inherit" : "#eee";
  }};
  padding: ${({ noVerticalPadding }) => {
    return noVerticalPadding ? "0 15px" : "15px";
  }};
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Catamaran", sans-serif;
  }
  @media all and (min-width: 768px) {
    width: calc(75% - 15px);
    margin: 15px auto 0px 15px;
  }
`;
