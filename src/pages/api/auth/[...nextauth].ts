import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }: any) {
      if (!user || !user.email || !user.name) return false;
      try {
        const response = await fetch('http://localhost:3000/api/v1/users', {
          method: 'POST',
          body: JSON.stringify({ name: user.name, email: user.email }),
        });

        if (!response.ok) return false;
      } catch (error) {
        return false;
      }
      return true;
    },
  },
};

export default NextAuth(authOptions);
