import { FlexContainer, Image, LinkButton, Text } from '@/components';
import { LINKS } from '@/constant';

const AboutTheBoringEducation = () => {
  return (
    <FlexContainer className='py-5'>
      <FlexContainer
        className='gradient-6 w-96 space-y-2 rounded-xl p-4'
        direction='col'
        itemCenter={false}
        justifyCenter={true}
      >
        <Text level='p' className='paragraph px-2 font-bold text-contentLight'>
          About The Boring Education
        </Text>
        <Image
          src='/svg/tbe_logo.svg'
          className=' w-5'
          alt='Co-founder Sachin Shukla'
        />
        <Text
          level='p'
          className='paragraph text-justify font-bold text-contentLight'
        >
          We at TBE, building the most affordable Tech courses that doesn't cost
          you lakhs in an environment like we taught ourselves.
        </Text>
        <LinkButton
          href={LINKS.juniorInWebEngineeringRegistrationLink}
          target='BLANK'
          buttonProps={{ variant: 'PRIMARY', text: 'Explore cohorts' }}
          className='w-full md:w-auto '
        />
      </FlexContainer>
    </FlexContainer>
  );
};

export default AboutTheBoringEducation;
