import { createReactQueryHooks } from "@trpc/react";
import {
  TRPCProviderComponent,
  TRPCProviderProperties,
} from "./trpc-provider.types";
import { AppRouter } from "~backend/source/server/rest/middlewares/getTrpcMiddleware/getTrpcMiddleware";
import { queryClient } from "../../AppProvider/AppProvider";

export const { Provider, createClient, useMutation, useQuery } =
  createReactQueryHooks<AppRouter>();
const trpcClient = createClient({
  url: "http://localhost:3000/trpc",
});

const TRPCProvider: TRPCProviderComponent = ({
  children,
}: TRPCProviderProperties): JSX.Element => {
  return (
    <Provider client={trpcClient} queryClient={queryClient}>
      {children}
    </Provider>
  );
};

export default TRPCProvider;
