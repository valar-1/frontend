module.exports = {
    publicRuntimeConfig: {
      // Will be available on both server and client
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
    },
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
    },
/*     env: {
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      ETHEREUM_RPC_URL: process.env.ETHEREUM_RPC_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    }, */
  };
  