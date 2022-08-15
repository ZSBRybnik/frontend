import styled from "@emotion/styled";

export const MainSection = styled.main`
  scroll-behavior: smooth;
  position: absolute;
  width: 100%;
  top: 50px;
  height: calc(100% - 100px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (min-width: 768px) {
    height: calc(100% - 50px);
    &::-webkit-scrollbar {
      display: block;
    }
  }
`;

export const MainSectionContent = styled.div`
  display: flex;
`;
