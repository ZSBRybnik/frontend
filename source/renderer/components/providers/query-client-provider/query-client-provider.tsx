import { QueryClientProvider as QueryClientProviderBase } from "react-query";
import queryClient from "~frontend/source/renderer/clients/query-client/query-client";
import {
  QueryClientProviderComponent,
  QueryClientProviderProperties,
} from "./query-client-provider.types";
import { ReactQueryDevtools } from "react-query/devtools";

const QueryClientProvider: QueryClientProviderComponent = ({
  children,
}: QueryClientProviderProperties): JSX.Element => {
  return (
    <QueryClientProviderBase client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProviderBase>
  );
};

export default QueryClientProvider;
