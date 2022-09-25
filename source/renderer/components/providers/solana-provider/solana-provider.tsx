import { clusterApiUrl } from "@solana/web3.js";
import {
  SolanaProviderProperties,
  SolanaProviderComponent,
} from "./solana-provider.types";
import { useMemo } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import useSolanaWallets from "~frontend/source/renderer/hooks/useSolanaWallets/useSolanaWallets";

const SolanaProvider: SolanaProviderComponent = ({
  children,
}: SolanaProviderProperties): JSX.Element => {
  const { wallets } = useSolanaWallets();
  const { solanaNetwork } = useMemo(() => {
    return { solanaNetwork: clusterApiUrl(WalletAdapterNetwork.Devnet) };
  }, []);
  return (
    <ConnectionProvider endpoint={solanaNetwork}>
      <WalletProvider wallets={wallets}>{children}</WalletProvider>
    </ConnectionProvider>
  );
};

export default SolanaProvider;
