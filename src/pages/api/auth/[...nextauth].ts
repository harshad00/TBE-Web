import { envConfig, routes } from '@/constant';
import { createUserInDB, getUserByEmailFromDB } from '@/database/query/user';
import { connectDB } from '@/middlewares';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: envConfig.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: envConfig.GOOGLE_AUTH_CLIENT_SECRET,
    }),
  ],
  secret: envConfig.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }: any) {
      if (!user) return false;

      const { name, email } = user;

      if (!email || !name) return false;

      try {
        await connectDB();

        const { data: existingUser } = await getUserByEmailFromDB(email);

        if (!existingUser) {
          const { data: result, error } = await createUserInDB({
            name,
            email,
            image: user.image,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
            isOnboarded: false,
          });

          user.id = result._id.toString();
          user.isOnboarded = result.isOnboarded ?? false;
        } else {
          user.id = existingUser._id.toString();
          user.isOnboarded = existingUser.isOnboarded ?? false;
        }

        return true;
      } catch (error) {
        console.error('Error signing in:', error);
        return false;
      }
    },

    async jwt({ token, user }: any) {
      if (user) {
        token.sub = user.id;
        token.isOnboarded = user.isOnboarded;
      }
      return token;
    },

    async session({ session, token }: any) {
      session.user.id = token.sub;
      session.user.isOnboarded = token.isOnboarded ?? false;
      return session;
    },
  },

  pages: {
    signIn: routes?.register,
  },
};

export default NextAuth(authOptions);
export { authOptions };
