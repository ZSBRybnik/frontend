import styled from "@emotion/styled";

export const SwitchWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: ${({ theme: { accent } }) => {
      return accent;
    }};
    &::before {
      transform: translateX(26px);
    }
  }
  &::focus + span {
    box-shadow: 0 0 1px
      ${({ theme: { accent } }) => {
        return accent;
      }};
  }
`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  &::before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
  }
`;
