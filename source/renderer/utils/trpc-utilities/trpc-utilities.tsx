import { createReactQueryHooks } from "@trpc/react";
import { AppRouter } from "~backend/source/server/rest/middlewares/getTrpcMiddleware/getTrpcMiddleware";

const {
  Provider: TRPCProvider,
  createClient,
  useMutation,
  useQuery,
} = createReactQueryHooks<AppRouter>();

export { createClient, useMutation, useQuery };

export default TRPCProvider;
