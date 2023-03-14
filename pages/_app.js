import React from 'react';
import App from 'next/app';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import '../styles/global.css';

const { chains, provider } = configureChains([mainnet], [publicProvider()]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: getDefaultWallets({ chains }).connectors,
  provider,
  chains,
});

class MyApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>

          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
}

export default MyApp;
