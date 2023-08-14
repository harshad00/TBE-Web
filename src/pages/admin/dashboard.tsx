import {
  AdminDashboardCardContainer,
  FlexContainer,
  SEO,
  Section,
  SectionHeaderContainer,
  Text,
} from '@/components';
import { PageSlug } from '@/interfaces';
import { getPreFetchProps } from '@/utils';
import { getSEOMeta, routes } from '@/constant';
import { useRouter } from 'next/router';
import { useUser } from '@/hooks';

const Admin = () => {
  const slug: PageSlug = '/admin';
  const { push } = useRouter();
  const seoMeta = getSEOMeta(slug as PageSlug);

  const { user, isLoading, isUnauthenticated } = useUser();

  if (isLoading) return;
  if (isUnauthenticated) push(routes.admin.base);

  return (
    !isUnauthenticated && (
      <Section>
        <SEO seoMeta={seoMeta} />
        <FlexContainer justifyCenter={true} className='py-6' direction='col'>
          <FlexContainer direction='col' className='gap-3'>
            <FlexContainer direction='col'>
              <SectionHeaderContainer
                headingLevel={2}
                heading='Hello'
                focusText={user.name}
              />
              <Text level='p' className='paragraph mt-1' textCenter={true}>
                What would like to do today?
              </Text>
            </FlexContainer>
            <AdminDashboardCardContainer />
          </FlexContainer>
        </FlexContainer>
      </Section>
    )
  );
};

export const getServerSideProps = getPreFetchProps;

export default Admin;
