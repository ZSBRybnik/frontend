import { createReactQueryHooks } from "@trpc/react";
import { FunctionComponent, PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "~backend/source/server/rest/middlewares/getTrpcMiddleware/getTrpcMiddleware";
import MotionProvider from "~frontend/source/renderer/components/MotionProvider/MotionProvider";
import reactGA from "react-ga";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import SolanaProvider from "../providers/solana-provider/solana-provider";
import MDXProvider from "../providers/mdx-provider/mdx-provider";
import ThemeProvider from "../providers/theme-provider/theme-provider";

reactGA.initialize(process.env.GOOGLE_ANALYTICS_ID || "");
reactGA.pageview(window.location.href);

export const {
  Provider: TRPCProvider,
  createClient,
  useMutation,
  useQuery,
} = createReactQueryHooks<AppRouter>();
export const queryClient = new QueryClient();
const trpcClient = createClient({
  url: "http://localhost:3000/trpc",
});

const AppProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return (
    <SolanaProvider>
      <MDXProvider>
        <TRPCProvider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider>
              <HelmetProvider>
                <MotionProvider>
                  <WalletModalProvider>
                    <BrowserRouter>{children}</BrowserRouter>
                  </WalletModalProvider>
                </MotionProvider>
              </HelmetProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </TRPCProvider>
      </MDXProvider>
    </SolanaProvider>
  );
};

export default AppProvider;
