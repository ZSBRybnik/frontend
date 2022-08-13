import { ThemeProvider } from "@emotion/react";
import { MDXProvider } from "@mdx-js/react";
import { createReactQueryHooks } from "@trpc/react";
import type { FunctionComponent, PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import MotionProvider from "~renderer/components/MotionProvider/MotionProvider";
import themes from "~renderer/constans/themes/themes";
import mdxComponentsMapper from "../../constans/mdxComponentsMapper/mdxComponentsMapper";

export const {
  Provider: TRPCProvider,
  createClient,
  useMutation,
  useQuery,
} = createReactQueryHooks();
const queryClient = new QueryClient();
const trpcClient = createClient({ url: "http://localhost:3000/trpc" });

const AppProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return (
    <MDXProvider components={mdxComponentsMapper}>
      <TRPCProvider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={themes["light"]}>
            <HelmetProvider>
              <MotionProvider>
                <BrowserRouter>{children}</BrowserRouter>
              </MotionProvider>
            </HelmetProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </TRPCProvider>
    </MDXProvider>
  );
};

export default AppProvider;
