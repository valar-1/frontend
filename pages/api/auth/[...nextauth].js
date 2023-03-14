import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { GoogleProvider } from 'next-auth/providers';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // Optional JWT configuration
  jwt: {
    secret: process.env.JWT_SECRET,
  },

  // Optional database configuration
  database: process.env.DATABASE_URL,

  // Optional callback for JSON Web Tokens
  jwt: {
    secret: process.env.JWT_SECRET,
    verificationOptions: {
      algorithms: ['RS256'],
      audience: 'https://api.example.com/',
      issuer: 'https://example.auth0.com/',
    },
    signingKey: {
      alg: 'RS256',
      format: 'pem',
      key: process.env.JWT_PRIVATE_KEY,
    },
    encryption: true,
    encryptionKey: process.env.JWT_ENCRYPTION_KEY,
  },

  // Optional callback for handling JWT tokens
  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      // Add access_token to the token right after signin
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return Promise.resolve(token);
    },
  },

  // Optional configuration to specify which events to subscribe to
  subscribe: async (event, data) => {
    console.log(event, data);
  },

  // Optional configuration to specify which pages to redirect to after sign in/out
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
    verifyRequest: '/login',
  },

  // Optional configuration to specify the session cookie
  cookies: {
    name: 'next-auth.session',
    options: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  },

  // Optional configuration to specify the session
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  // Optional configuration to specify the debug mode
  debug: process.env.NODE_ENV === 'development',
});
