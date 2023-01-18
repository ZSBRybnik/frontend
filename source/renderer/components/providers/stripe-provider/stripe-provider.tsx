import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import {
  StripeProviderComponent,
  StripeProviderProperties,
} from "./stripe-provider.types";

const stripe: Stripe | null = await loadStripe(process.env.STRIPE_KEY || "");

const StripeProvider: StripeProviderComponent = ({
  children,
}: StripeProviderProperties): JSX.Element => {
  return <Elements stripe={stripe}>{children}</Elements>;
};

export default StripeProvider;
