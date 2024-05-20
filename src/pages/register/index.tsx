import React from 'react';
import { isLoggedIn } from '@/utils/isLoggedIn';
import { ServerSessionProp } from '@/interfaces';
import type { GetServerSidePropsContext } from 'next';
function Register({ session }: { session: ServerSessionProp }) {
  if (typeof window === 'undefined') return null;

  return <div>index</div>;
}

export default Register;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const session: ServerSessionProp | null = await isLoggedIn(context);
    console.log('session in register page = ', session);

    if (!session) {
      return {
        props: {
          session: null,
        },
      };
    }
    return { props: { session } };
  } catch (error) {
    return { props: { session: null } };
  }
}
