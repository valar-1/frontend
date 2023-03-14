module.exports = {
    publicRuntimeConfig: {
      // Will be available on both server and client
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
    },
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
    },
  };
  