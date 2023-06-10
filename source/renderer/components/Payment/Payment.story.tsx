import type { Meta, StoryFn } from "@storybook/react";
import type { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "~frontend/source/renderer/components/GlobalStyles/GlobalStyles";
import Payment from "~frontend/source/renderer/components/Payment/Payment";

export default {
  title: "Payment",
  component: Payment,
} as Meta<typeof Payment>;

const Template: StoryFn<FunctionComponent<Record<string, unknown>>> = ({
  ...rest
}: Record<string, unknown>): JSX.Element => {
  return (
    <BrowserRouter>
      <GlobalStyle isStorybook />
      <Payment {...rest} />
    </BrowserRouter>
  );
};

export const PaymentExample: StoryFn<typeof Payment> = Template.bind(
  {} as Record<string, unknown>,
);

PaymentExample.args = {} as Record<string, unknown>;
