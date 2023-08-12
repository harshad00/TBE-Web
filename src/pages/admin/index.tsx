import { Button, SEO } from '@/components';
import { PageSlug } from '@/interfaces';
import { getPreFetchProps } from '@/utils';
import { useSession, signIn, signOut } from 'next-auth/react';
import { getSEOMeta } from '@/constant';

const Admin = () => {
  const slug: PageSlug = '/admin';
  const seoMeta = getSEOMeta(slug as PageSlug);

  const { data: session } = useSession();
  console.log('HERE', session);

  const handleGoogleAuth = () => {
    signIn('google');
  };

  return (
    <div>
      <SEO seoMeta={seoMeta} />
      <button></button>
      <Button variant='PRIMARY' text='Get Started' onClick={handleGoogleAuth} />
    </div>
  );
};

export const getServerSideProps = getPreFetchProps;

export default Admin;
