import styled from "@emotion/styled";

export const BottomNavbarWrapper = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  height: 50px;
  width: 100vw;
  background: #e05415;
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  color: #fff;
  display: flex;
  align-items: center;
  > * {
    cursor: pointer;
    line-height: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    &:hover {
      background: #c04504;
    }
  }
  @media all and (min-width: 768px) {
    display: none;
  }
`;
