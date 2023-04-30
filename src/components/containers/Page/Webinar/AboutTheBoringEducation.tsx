import { FlexContainer, Image, LinkButton, Section, Text } from '@/components';
import { LINKS, routes } from '@/constant';

const AboutTheBoringEducation = () => {
  return (
    <Section>
      <FlexContainer
        className='gradient-6 m-auto w-1/2 gap-4 rounded-2 px-4 py-4'
        direction='col'
      >
        <Text level='h5' className='heading-5 text-contentLight'>
          About The Boring Education
        </Text>
        <FlexContainer direction='col' itemCenter={false} className='gap-2'>
          <Image
            src='/svg/tbe_logo.svg'
            className='w-16'
            fullWidth={false}
            alt='Co-founder Sachin Shukla'
          />
          <FlexContainer
            direction='col'
            className='gap-3'
            justifyCenter={false}
            itemCenter={false}
          >
            <Text level='p' className='strong-text text-contentLight'>
              We at TBE, building the most affordable Tech courses that doesn't
              cost you lakhs in an environment like we taught ourselves.
            </Text>
            <LinkButton
              href={routes.home}
              buttonProps={{ variant: 'PRIMARY', text: 'Explore cohorts' }}
              className='w-full md:w-auto '
            />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default AboutTheBoringEducation;
