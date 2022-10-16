import styled from "@emotion/styled";

export const PresentationBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: #eee;
  padding: 15px;
`;

export const PresentationWrapper = styled.div`
  display: none;
  word-wrap: break-word;
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 15px;
    width: calc(25% - 30px);
    margin: 15px 15px auto auto;
  }
`;
