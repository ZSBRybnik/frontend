import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";
import useSolanaWallets from "~frontend/source/renderer/hooks/useSolanaWallets/useSolanaWallets";
import {
  SolanaProviderComponent,
  SolanaProviderProperties,
} from "./solana-provider.types";

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
