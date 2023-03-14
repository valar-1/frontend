import React from 'react';
import { ConnectButton, RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';

const { chains, provider } = configureChains([mainnet], [publicProvider()]);

const { connectors } = getDefaultWallets({ chains });

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  chains,
});

const SignInButton = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ConnectButton />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default SignInButton;
