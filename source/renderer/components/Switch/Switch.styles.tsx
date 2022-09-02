import styled from "@emotion/styled";

export const SwitchWrapper = styled.div`
  display: none;
  width: 100%;
  background: #eee;
  height: 50px;
  @media all and (min-width: 768px) {
    display: flex;
  }
`;

export const SwitchButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #ddd;
  }
`;
