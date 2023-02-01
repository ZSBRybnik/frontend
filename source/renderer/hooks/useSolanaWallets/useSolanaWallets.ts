import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  AlphaWalletAdapter,
  AvanaWalletAdapter,
  BackpackWalletAdapter,
  BitKeepWalletAdapter,
  BitpieWalletAdapter,
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SkyWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  SolongWalletAdapter,
  SpotWalletAdapter,
  StrikeWalletAdapter,
  TokenaryWalletAdapter,
  TokenPocketWalletAdapter,
  TorusWalletAdapter,
  TrustWalletAdapter,
  WalletConnectWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";

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
