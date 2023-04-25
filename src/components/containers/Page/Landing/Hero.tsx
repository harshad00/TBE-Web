import {
  FlexContainer,
  LinkButton,
  Section,
  SectionHeaderContainer,
  Text,
} from '@/components';
import { generateSectionPath, routes } from '@/constant';
import { useRouter } from 'next/router';

const LandingPageHero = () => {
  const router = useRouter();

  return (
    <Section>
      <FlexContainer justifyCenter={true} className='py-6' direction='col'>
        <FlexContainer direction='col'>
          <FlexContainer direction='col'>
            <SectionHeaderContainer
              headingLevel={2}
              heading='Tech Learning for'
              focusText='Everyone'
            />
            <Text
              level='p'
              className='paragraph mt-2 text-grey'
              textCenter={true}
            >
              Learn Tech Skills & Prepare yourself for a Tech Job.
            </Text>
          </FlexContainer>
          <div className='mt-4'>
            <LinkButton
              href={generateSectionPath({
                basePath: router.basePath,
                sectionID: routes.internals.landing.programs,
              })}
              buttonProps={{
                variant: 'PRIMARY',
                text: 'Explore Roadmaps',
                className: '',
              }}
            />
          </div>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default LandingPageHero;
