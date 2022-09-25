import { QueryClientProvider as QueryClientProviderBase } from "react-query";
import { queryClient } from "../../AppProvider/AppProvider";
import {
  QueryClientProviderComponent,
  QueryClientProviderProperties,
} from "./query-client-provider.types";

const QueryClientProvider: QueryClientProviderComponent = ({
  children,
}: QueryClientProviderProperties): JSX.Element => {
  return (
    <QueryClientProviderBase client={queryClient}>
      {children}
    </QueryClientProviderBase>
  );
};

export default QueryClientProvider;
