import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import MotionProvider from "../../MotionProvider/MotionProvider";
import MDXProvider from "../mdx-provider/mdx-provider";
import QueryClientProvider from "../query-client-provider/query-client-provider";
import SolanaProvider from "../solana-provider/solana-provider";
import StripeProvider from "../stripe-provider/stripe-provider";
import ThemeProvider from "../theme-provider/theme-provider";
import TRPCProvider from "../trpc-provider/trpc-provider";
// import * as Sentry from "@sentry/browser";
// import { BrowserTracing } from "@sentry/tracing";
import { hotjar } from "react-hotjar";
import {
  AppProviderComponent,
  AppProviderProperties,
} from "./app-provider.types";

hotjar.initialize(
  parseInt(process.env.HOTJAR_ID || "0"),
  parseInt(process.env.HOTJAR_SNIPPET_VERSION || "0"),
);

hotjar.identify("USER_ID", { userProperty: "value" });

/*Sentry.init({
  dsn: "https://46b3ca414ef642a09aa604e4878d3396@o4504091405910016.ingest.sentry.io/4504091410563075",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});*/

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
                  <StripeProvider>
                    <WalletModalProvider>
                      <BrowserRouter>{children}</BrowserRouter>
                    </WalletModalProvider>
                  </StripeProvider>
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
