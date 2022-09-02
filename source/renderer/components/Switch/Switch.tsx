/* eslint-disable max-params */
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { SwitchWrapper, SwitchButton } from "./Switch.styles";

type SwitchProperties = {
  options: ({
    value: string;
  } & Pick<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    "onClick"
  >)[];
};

const Switch = ({ options }: SwitchProperties) => {
  return (
    <SwitchWrapper>
      {options.map(({ value, onClick }, index) => {
        return (
          <SwitchButton key={`switch-${value}-${index}`} onClick={onClick}>
            {value}
          </SwitchButton>
        );
      })}
    </SwitchWrapper>
  );
};
export default Switch;
