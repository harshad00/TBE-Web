import {
  Button,
  FlexContainer,
  SEO,
  Section,
  SectionHeaderContainer,
  Text,
} from '@/components';
import { PageSlug } from '@/interfaces';
import { getPreFetchProps, signInUser } from '@/utils';
import { getSEOMeta } from '@/constant';
import { useSession } from 'next-auth/react';

const Admin = () => {
  const slug: PageSlug = '/admin';
  const seoMeta = getSEOMeta(slug as PageSlug);

  const { data: session, status } = useSession();
  console.log(session?.user);

  return (
    <Section>
      <SEO seoMeta={seoMeta} />
      <FlexContainer justifyCenter={true} className='py-6' direction='col'>
        <FlexContainer direction='col'>
          <FlexContainer direction='col'>
            <SectionHeaderContainer
              headingLevel={2}
              heading='Hello'
              focusText={session?.user?.name ?? ''}
            />
            <Text
              level='p'
              className='paragraph mt-2 text-dark'
              textCenter={true}
            >
              What would like to do today?
            </Text>
          </FlexContainer>
          <div className='mt-4'>
            <Button
              variant='PRIMARY'
              text='Log in with Google'
              onClick={() => signInUser('google')}
            />
          </div>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export const getServerSideProps = getPreFetchProps;

export default Admin;
