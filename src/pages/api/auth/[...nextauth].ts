import { routes } from '@/constant';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }: any) {
      if (!user) return false;

      const { name, email } = user;

      if (!email || !name) return false;

      try {
        const response = await fetch(`${process.env.BASE_API_URL}/users`, {
          method: 'POST',
          body: JSON.stringify({ name, email }),
        });

        if (!response.ok) return false;
      } catch (error) {
        return false;
      }
      return true;
    },
  },
  pages: {
    signIn: routes.register,
  },
};

export default NextAuth(authOptions);
export { authOptions };
