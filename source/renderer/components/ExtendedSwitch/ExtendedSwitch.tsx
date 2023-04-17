/* eslint-disable max-params */
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { SwitchButton, SwitchWrapper } from "./ExtendedSwitch.styles";

type SwitchProperties = {
  options: ({
    value: string;
  } & Pick<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    "onClick"
  >)[];
};

const ExtendedSwitch = ({ options }: SwitchProperties) => {
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
export default ExtendedSwitch;
