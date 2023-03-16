import React from 'react';
import { AppProps } from 'next/app';
import { RainbowKitProvider, darkTheme, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import '../styles/global.css';
import Layout from '../components/Layout';
import { SessionProvider } from 'next-auth/react';

const { chains, provider } = configureChains([mainnet], [publicProvider()]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: getDefaultWallets({ chains }).connectors,
  provider,
  chains,
});

function MyApp({ Component, pageProps }, AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <SessionProvider session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider>
          <RainbowKitProvider chains={chains}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;
