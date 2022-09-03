import styled from "@emotion/styled";
import { PageProperties } from "./Page";

type PageWrapperProperties = Pick<
  PageProperties,
  "noBackground" | "noVerticalPadding" | "defaultChildrenVerticalMargin"
>;

export const PageWrapper = styled.div<PageWrapperProperties>`
  height: fit-content;
  word-break: break-all;
  background: ${({ noBackground }) => {
    return noBackground ? "inherit" : "#eee";
  }};
  padding: ${({ noBackground }) => {
    return noBackground ? "0" : "15px";
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
    padding: ${({ noVerticalPadding }) => {
      return noVerticalPadding ? "0 15px" : "15px";
    }};
    width: calc(75% - 15px);
    margin: 15px auto 0px 15px;
    > * {
      margin: ${({ defaultChildrenVerticalMargin }) => {
        return defaultChildrenVerticalMargin
          ? `${defaultChildrenVerticalMargin}px 0`
          : "inherit";
      }};
      &:first-of-type {
        margin-top: 0;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;
