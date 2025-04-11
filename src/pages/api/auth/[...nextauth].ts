import { envConfig, routes } from '@/constant';
import {
  createUserInDB,
  getUserByEmailFromDB,
  getUserByIdFromDB,
} from '@/database/query/user';
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
    // 1. When user signs in
    async signIn({ user, account }: any) {
      if (!user) return false;

      const { name, email } = user;

      if (!email || !name) return false;

      try {
        await connectDB();

        const { data: existingUser } = await getUserByEmailFromDB(email);

        if (!existingUser) {
          const { data: result } = await createUserInDB({
            name,
            email,
            image: user.image,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
          });

          user.id = result._id.toString();
        } else {
          user.id = existingUser._id.toString();
        }

        return true;
      } catch (error) {
        console.error('Error signing in:', error);
        return false;
      }
    },

    // 2. Called on every session check
    async session({ session, token }: any) {
      try {
        if (token?.sub) {
          await connectDB();
          const { data: dbUser } = await getUserByIdFromDB(token.sub);

          if (dbUser) {
            session.user = {
              id: dbUser._id.toString(),
              name: dbUser.name,
              email: dbUser.email,
              image: dbUser.image,
              isOnboarded: dbUser.isOnboarded,
              userName: dbUser.userName,
              contactNo: dbUser.contactNo,
              profession: dbUser.profession,
              purpose: dbUser.purpose,
            };
          }
        }
        return session;
      } catch (error) {
        console.error('Error loading session user:', error);
        return session;
      }
    },

    // 3. Called after sign-in to persist user ID in token
    async jwt({ token, user }: any) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },

  // Custom pages
  pages: {
    signIn: routes?.register, // Redirect to your custom sign-in/register page
  },
};

export default NextAuth(authOptions);
export { authOptions };
