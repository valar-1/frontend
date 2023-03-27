import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getCsrfToken } from "next-auth/react";
import { SiweMessage } from "siwe";

async function authorize(credentials, req) {
  try {
    const siwe = new SiweMessage(JSON.parse(credentials?.message || "{}"));
    const nextAuthUrl = new URL(process.env.NEXTAUTH_URL || "");

    if (siwe.domain !== nextAuthUrl.host) {
      return null;
    }

    if (siwe.nonce !== (await getCsrfToken({ req }))) {
      return null;
    }

    await siwe.validate(credentials?.signature || "");
    

    return {
      id: siwe.address,
    };
  } catch (e) {
    console.log(e);
    return null;
  }
}



function getProviders(isDefaultSigninPage, req) {
  const ethereumProvider = CredentialsProvider({
    name: "Ethereum",
    credentials: {
      message: {
        label: "Message",
        type: "text",
        placeholder: "0x0",
      },
      signature: {
        label: "Signature",
        type: "text",
        placeholder: "0x0",
      },
    },
    authorize: (credentials) => authorize(credentials, req),
  });

  return isDefaultSigninPage ? [] : [ethereumProvider];
}

export default async function auth(req, res) {
  const isDefaultSigninPage =
    req.method === "GET" && req.query.nextauth.includes("signin");
  const providers = getProviders(isDefaultSigninPage, req);

  return await NextAuth(req, res, {
    providers,
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async session({ session, token }) {
        session.address = token.sub;
        session.user.name = token.sub;
        session.user.image = "https://www.fillmurray.com/128/128";
        return session;
      },
    },
  });
}
