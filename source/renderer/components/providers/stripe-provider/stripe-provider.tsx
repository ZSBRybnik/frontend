import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  StripeProviderProperties,
  StripeProviderComponent,
} from "./stripe-provider.types";

const stripe: Stripe | null = await loadStripe(
  "pk_test_51AROWSJX9HHJ5bycpEUP9dK39tXufyuWogSUdeweyZEXy3LC7M8yc5d9NlQ96fRCVL0BlAu7Nqt4V7N5xZjJnrkp005fDiTMIr",
);

const StripeProvider: StripeProviderComponent = ({
  children,
}: StripeProviderProperties): JSX.Element => {
  return <Elements stripe={stripe}>{children}</Elements>;
};

export default StripeProvider;
