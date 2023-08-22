import {
  FlexContainer,
  SEO,
  Section,
  SectionHeaderContainer,
  Text,
  withAuth,
} from '@/components';
import { PageSlug } from '@/interfaces';
import { getPreFetchProps } from '@/utils';
import { authHOCConfig, getSEOMeta, routes } from '@/constant';
import { useRouter } from 'next/router';
import { useUser } from '@/hooks';

const AdminProgramLeadsDashboard = () => {
  const slug: PageSlug = '/admin';
  const seoMeta = getSEOMeta(slug as PageSlug);

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
            <Text level='p' className='strong-text mt-1' textCenter={true}>
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

export default withAuth(AdminProgramLeadsDashboard, authHOCConfig.admin);
