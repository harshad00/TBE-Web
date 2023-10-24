import { GOOGLE_AUTH_CLIENT_ID, GOOGLE_AUTH_CLIENT_SECRET } from '@/constant';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_AUTH_CLIENT_ID,
      clientSecret: GOOGLE_AUTH_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
};

export const config = {
  api: {
    externalResolver: true,
  },
};

export default NextAuth(authOptions);
