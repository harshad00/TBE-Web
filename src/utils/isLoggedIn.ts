import { ServerSessionProp } from '@/interfaces';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';

const isLoggedIn = async (
  context: GetServerSidePropsContext
): Promise<ServerSessionProp | null> => {
  try {
    const session: ServerSessionProp | null = await getServerSession(
      context.req,
      context.res,
      authOptions
    );
    if (!session) return null;
    return session;
  } catch (error) {
    return null;
  }
};

export { isLoggedIn };
