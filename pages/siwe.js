import { useState } from "react";
import { useRouter } from "next/router";
import { getCsrfToken, signIn } from "next-auth/react";
import { ethers } from "ethers";
import { SiweMessage } from "siwe";
import {
  ConnectButton,
  darkTheme,
  RainbowKitProvider,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import {
  WagmiConfig,
  createClient,
  configureChains,
  mainnet,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";

const { chains, provider } = configureChains([mainnet], [publicProvider()]);
const { connectors } = getDefaultWallets({ chains });
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  chains,
});

export default function Siwe({ csrfToken }) {
  const router = useRouter();

  async function handleConnect() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
await provider.send('eth_requestAccounts', []);

    const signer = provider.getSigner();
    const siwe = new SiweMessage({
      domain: window.location.host,
      nonce: csrfToken,
    });

    const signature = await signer.signMessage(siwe);
    const result = await signIn("ethereum", {
      callbackUrl: router.query.callbackUrl || "/",
      message: JSON.stringify(siwe),
      signature,
      redirect: false,
    });

    if (result.error) {
      alert(result.error);
    } else {
      router.replace(result.url);
    }
  }

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: "#1b1b1b",
          accentColorForeground: "white",
          borderRadius: "large",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        <ConnectButton onClick={handleConnect} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      csrfToken,
    },
  };
}
