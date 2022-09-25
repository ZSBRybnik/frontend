import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import MotionProvider from "../../MotionProvider/MotionProvider";
import MDXProvider from "../mdx-provider/mdx-provider";
import QueryClientProvider from "../query-client-provider/query-client-provider";
import SolanaProvider from "../solana-provider/solana-provider";
import ThemeProvider from "../theme-provider/theme-provider";
import TRPCProvider from "../trpc-provider/trpc-provider";
import {
  AppProviderComponent,
  AppProviderProperties,
} from "./app-provider.types";

const AppProvider: AppProviderComponent = ({
  children,
}: AppProviderProperties): JSX.Element => {
  return (
    <SolanaProvider>
      <MDXProvider>
        <TRPCProvider>
          <QueryClientProvider>
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
