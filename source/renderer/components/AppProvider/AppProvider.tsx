import { ThemeProvider } from "@emotion/react";
import { MDXProvider } from "@mdx-js/react";
import { createReactQueryHooks } from "@trpc/react";
import { FunctionComponent, PropsWithChildren, useMemo } from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "~backend/source/server/rest/middlewares/getTrpcMiddleware/getTrpcMiddleware";
import MotionProvider from "~frontend/source/renderer/components/MotionProvider/MotionProvider";
import mdxComponentsMapper from "~frontend/source/renderer/constants/mdxComponentsMapper/mdxComponentsMapper";
import themes from "~frontend/source/renderer/constants/themes/themes";
import reactGA from "react-ga";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import useSolanaWallets from "../../hooks/useSolanaWallets/useSolanaWallets";
import { clusterApiUrl } from "@solana/web3.js";

reactGA.initialize(process.env.GOOGLE_ANALYTICS_ID || "");
reactGA.pageview(window.location.href);

export const {
  Provider: TRPCProvider,
  createClient,
  useMutation,
  useQuery,
} = createReactQueryHooks<AppRouter>();
const queryClient = new QueryClient();
const trpcClient = createClient({
  url: "http://localhost:3000/trpc",
});

const AppProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const { wallets } = useSolanaWallets();
  const { solanaNetwork } = useMemo(() => {
    return { solanaNetwork: clusterApiUrl(WalletAdapterNetwork.Devnet) };
  }, []);
  return (
    <ConnectionProvider endpoint={solanaNetwork}>
      <WalletProvider wallets={wallets}>
        <MDXProvider components={mdxComponentsMapper}>
          <TRPCProvider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
              <ThemeProvider theme={themes["light"]}>
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
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default AppProvider;
