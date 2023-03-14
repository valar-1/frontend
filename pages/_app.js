import React from 'react';
import App from 'next/app';
import { RainbowKitProvider, darkTheme, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import '../styles/global.css';
import Layout from '../components/Layout';

const { chains, provider } = configureChains([mainnet], [publicProvider()]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: getDefaultWallets({ chains }).connectors,
  provider,
  chains,
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
}

export default MyApp;
