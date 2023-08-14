import {
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

const AdminProgramLeadsDashboard = () => {
  const slug: PageSlug = '/admin';
  const { push } = useRouter();
  const seoMeta = getSEOMeta(slug as PageSlug);

  const { user, isLoading } = useUser();

  if (isLoading) return;
  if (!user) push(routes.admin.base);

  return (
    <Section>
      <SEO seoMeta={seoMeta} />
      <FlexContainer justifyCenter={true} className='py-6' direction='col'>
        <FlexContainer direction='col' className='gap-3'>
          <FlexContainer direction='col'>
            <SectionHeaderContainer
              headingLevel={2}
              heading='Program'
              focusText='Leads'
            />
            <Text level='p' className='paragraph mt-1' textCenter={true}>
              The list of all program leads.
            </Text>
          </FlexContainer>
          <FlexContainer direction='col'></FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export const getServerSideProps = getPreFetchProps;

export default AdminProgramLeadsDashboard;
