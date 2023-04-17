import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import {
  SwitchInput,
  SwitchSlider,
  SwitchWrapper,
} from "~frontend/source/renderer/components/Switch/Switch.styles";

type SwitchProperties = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "defaultChecked" | "type"
>;

const Switch = ({ onClick, ...rest }: SwitchProperties) => {
  return (
    <SwitchWrapper onClick={onClick}>
      <SwitchInput {...rest} type="checkbox" />
      <SwitchSlider />
    </SwitchWrapper>
  );
};

export default Switch;
