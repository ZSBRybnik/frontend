import { useMemo } from "react";
import {
  AlphaWalletAdapter,
  PhantomWalletAdapter,
  LedgerWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  SolletExtensionWalletAdapter,
  BackpackWalletAdapter,
  WalletConnectWalletAdapter,
  AvanaWalletAdapter,
  TrustWalletAdapter,
  TorusWalletAdapter,
  TokenPocketWalletAdapter,
  TokenaryWalletAdapter,
  StrikeWalletAdapter,
  BitKeepWalletAdapter,
  BitpieWalletAdapter,
  SpotWalletAdapter,
  SolongWalletAdapter,
  SkyWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

const useSolanaWallets = () => {
  const { wallets } = useMemo(() => {
    return {
      wallets: [
        new AlphaWalletAdapter(),
        new AvanaWalletAdapter(),
        new BackpackWalletAdapter(),
        new BitpieWalletAdapter(),
        new BitKeepWalletAdapter(),
        new PhantomWalletAdapter(),
        new LedgerWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter(),
        new SolletWalletAdapter(),
        new SolletExtensionWalletAdapter(),
        new TrustWalletAdapter(),
        new TokenPocketWalletAdapter(),
        new TokenaryWalletAdapter(),
        new StrikeWalletAdapter(),
        new SpotWalletAdapter(),
        new SolongWalletAdapter(),
        new SkyWalletAdapter(),
        new TorusWalletAdapter(),
        new WalletConnectWalletAdapter({
          network: WalletAdapterNetwork.Devnet,
          options: {},
        }),
      ],
    };
  }, []);
  return { wallets };
};
export default useSolanaWallets;
