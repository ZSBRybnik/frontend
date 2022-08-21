import styled from "@emotion/styled";

export const PresentationBlock = styled.div`
  margin-top: 15px;
  background: #eee;
  padding: 15px;
  &:first-of-type {
    margin-top: 0;
  }
`;

export const PresentationWrapper = styled.div`
  display: none;
  word-wrap: break-word;
  @media all and (min-width: 768px) {
    text-align: center;
    display: block !important;
    width: calc(25% - 30px);
    margin: 15px 15px auto auto;
  }
`;
