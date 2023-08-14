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
import { getSEOMeta, routes } from '@/constant';
import { useRouter } from 'next/router';
import { useUser } from '@/hooks';

const Admin = () => {
  const { push } = useRouter();
  const slug: PageSlug = '/admin';
  const seoMeta = getSEOMeta(slug as PageSlug);

  const { isLoading, isUnauthenticated } = useUser();

  if (isLoading) return;

  if (!isUnauthenticated) push(routes.admin.dashboard);

  return (
    isUnauthenticated && (
      <Section>
        <SEO seoMeta={seoMeta} />
        <FlexContainer justifyCenter={true} className='py-6' direction='col'>
          <FlexContainer direction='col'>
            <FlexContainer direction='col'>
              <SectionHeaderContainer
                headingLevel={2}
                heading='Login to'
                focusText='Admin'
              />
              <Text
                level='p'
                className='paragraph mt-2 text-grey'
                textCenter={true}
              >
                Access Program Leads and Everything an Admin can see. Authorised
                Access Only.
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
    )
  );
};

export const getServerSideProps = getPreFetchProps;

export default Admin;
