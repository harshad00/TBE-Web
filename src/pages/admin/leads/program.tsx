import {
  FlexContainer,
  LinkButton,
  SEO,
  Section,
  SectionHeaderContainer,
  Text,
  withAuth,
} from '@/components';
import { PageSlug } from '@/interfaces';
import { getPreFetchProps } from '@/utils';
import { authHOCConfig, getSEOMeta } from '@/constant';
import { useApi } from '@/hooks';
import { useEffect } from 'react';

const AdminProgramLeadsDashboard = () => {
  const slug: PageSlug = '/admin';
  const seoMeta = getSEOMeta(slug as PageSlug);
  const { data, loading, makeRequest } = useApi();

  useEffect(() => {
    makeRequest({ method: 'GET', url: '/leads/cohort' });
  }, []);

  if (loading) return;

  console.log('HERE', data);

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
          <FlexContainer direction='col'>
            <div className='py-6'>
              <div className='flex flex-col items-start justify-center gap-3 rounded-lg border border-black p-2'>
                <div className='flex flex-col items-start justify-start gap-1'>
                  <div className='text-center text-base font-semibold text-zinc-900'>
                    Name: Sachin Kr. Shukla
                  </div>
                  <div className='text-center text-base font-semibold text-zinc-900'>
                    Profession: College Student
                  </div>
                  <div className='text-center text-base font-semibold text-zinc-900'>
                    Cohort: Be Front-end Master
                  </div>
                  <div className='text-center text-base font-semibold text-zinc-900'>
                    Created on: 29 July, 2023 04: 32 PM
                  </div>
                  <div className='text-center text-base font-semibold text-zinc-900'>
                    Updated on on: 29 July, 2023 08: 32 PM
                  </div>
                </div>
                <div className='flex items-center justify-start gap-2'>
                  <div className='text-center text-base font-semibold text-zinc-900'>
                    Status
                  </div>
                  <div className=''>
                    <select className='rounded'>
                      <option className='text-center text-base font-semibold text-zinc-900'>
                        Interested
                      </option>
                      <option className='text-center text-base font-semibold text-zinc-900'>
                        No Interested
                      </option>
                    </select>
                  </div>
                </div>
                <div className='flex w-full gap-1'>
                  <LinkButton
                    buttonProps={{
                      variant: 'GHOST',
                      text: 'Call',
                      className: '',
                    }}
                    href='#'
                    className='w-full'
                  />
                  <LinkButton
                    buttonProps={{
                      variant: 'GHOST',
                      text: 'Message',
                      className: '',
                    }}
                    href='#'
                    className='w-full'
                  />
                </div>
              </div>
            </div>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export const getServerSideProps = getPreFetchProps;

export default withAuth(AdminProgramLeadsDashboard, authHOCConfig.admin);
