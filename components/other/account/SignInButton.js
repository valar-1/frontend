import React from 'react';
import {
  darkTheme,
  RainbowKitProvider,
  getDefaultWallets,
  ConnectButton,
} from '@rainbow-me/rainbowkit';
import {
  WagmiConfig,
  createClient,
  configureChains,
  mainnet,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';
import Siwe from '/pages/siwe.js';
import { useAuthenticatedUser } from '/hooks/useAuthenticatedUser.js';

const { chains, provider } = configureChains([mainnet], [publicProvider()]);
const { connectors } = getDefaultWallets({ chains });
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  chains,
});

const SignInButton = () => {
  const { isLoading, isAuthenticated, userAddress } = useAuthenticatedUser();

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: '#1b1b1b',
          accentColorForeground: 'white',
          borderRadius: 'large',
          fontStack: 'system',
          overlayBlur: 'small',
        })}
      >
        {isLoading ? (
          <ConnectButton isLoading>Checking Authentication...</ConnectButton>
        ) : isAuthenticated ? (
          <ConnectButton
            className="rainbow-m-horizontal_medium rainbow-p-horizontal_small"
            variant="brand"
          >
            Authenticated as {userAddress}
          </ConnectButton>
        ) : (
          <Siwe />
        )}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default SignInButton;
