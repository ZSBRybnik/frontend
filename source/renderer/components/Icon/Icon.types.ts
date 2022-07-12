import { Theme } from "@emotion/react";
import { StyledComponent } from "@emotion/styled";
import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";

export type IconComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  Record<string, unknown>
>;
