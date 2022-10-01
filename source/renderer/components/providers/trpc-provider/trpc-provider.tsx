import {
  TRPCProviderComponent,
  TRPCProviderProperties,
} from "./trpc-provider.types";
import TRPCProviderBase from "~frontend/source/renderer/utils/trpc-utilities/trpc-utilities";
import trpcClient from "~frontend/source/renderer/clients/trpc-client/trpc-client";
import queryClient from "~frontend/source/renderer/clients/query-client/query-client";

const TRPCProvider: TRPCProviderComponent = ({
  children,
}: TRPCProviderProperties): JSX.Element => {
  return (
    <TRPCProviderBase client={trpcClient} queryClient={queryClient}>
      {children}
    </TRPCProviderBase>
  );
};

export default TRPCProvider;
