import { FlexContainer, IconPill, Image, Text } from '@/components';

const AboutWebinarContainer = () => {
  return (
    <FlexContainer direction='col'>
      <FlexContainer direction='col'>
        <Text level='h4' className='heading-4'>
          About Webinar
        </Text>
        <FlexContainer className='mt-2 gap-2'>
          <IconPill
            iconPath='/svg/calendar_grey.svg'
            iconAltText='webinar-calendar'
            label='29 Apr, Saturday'
            labelColor='text-greyDark'
          />
          <IconPill
            iconPath='/svg/clock_grey.svg'
            iconAltText='webinar-clock'
            label='5 PM'
            labelColor='text-greyDark'
          />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        className='w-96  space-y-3 pt-4'
        direction='col'
        itemCenter={false}
      >
        <Text level='p' className='paragraph'>
          Programming is becoming everyone's need these days. You want to build
          a software, You need programming. You want to get a job, you need
          programming.
        </Text>
        <Text level='p' className='paragraph'>
          First thing as a learner you do, is look for an online programs. There
          are so many programs available in the market.
        </Text>
        <Text level='p' className='paragraph'>
          With lot of options in market, You will be confused to choose an
          option.. and with that you'll choose an expensive program that'll cost
          you lakhs.
        </Text>
        <Text level='p' className='paragraph'>
          Everybody has a spending capacity and with a “Job in 6 Months” scheme,
          you'll be prompted to buy a program.
        </Text>
        <Text level='p' className='paragraph'>
          Should you buy or should you not? We'll discuss it in our programs.
        </Text>
      </FlexContainer>
    </FlexContainer>
  );
};

export default AboutWebinarContainer;
