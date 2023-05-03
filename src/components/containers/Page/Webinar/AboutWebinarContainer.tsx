import {
  FlexContainer,
  IconPill,
  Text,
  WebinarDescription,
} from '@/components';


import { WebinarAboutProps } from '@/interfaces'

const webinarDescriptions = [
  "Programming is becoming everyone's need these days. You want to build a software, You need programming. You want to get a job, you need programming.",
  'First thing as a learner you do, is look for an online programs. There are so many programs available in the market.',
  "With lot of options in market, You will be confused to choose an option, and with that you'll choose an expensive program that'll cost you lakhs.",
  "Everybody has a spending capacity and with a “Job in 6 Months” scheme, you'll be prompted to buy a program.",
  "Should you buy or should you not? We'll discuss it in our programs.",
];

const webinarAudiences = [
  "1. You'll learn with your background, will programming be helpful for you?",
  '2. Decide if you should be okay buying expensive bootcamps',
  '3. Understand what it takes to break into Tech',
];

const AboutWebinarContainer = ({ id, heading,
  schedule,
  aboutText,
  whatWillYouLearn, }: WebinarAboutProps) => {
  return (
    <FlexContainer key={id} direction='col' className='m-auto w-3/4 lg:w-1/3'>
      <FlexContainer direction='col'>
        <Text level='h4' className='heading-4'>
          {heading}
        </Text>
        <FlexContainer className='mt-2 gap-2'>
          <IconPill
            iconPath='/svg/calendar_grey.svg'
            iconAltText='webinar-calendar'
            label='29 Apr, Saturday'
            labelColor='text-greyDark'
            className='w-full md:w-fit'
          />
          <IconPill
            iconPath='/svg/clock_grey.svg'
            iconAltText='webinar-clock'
            label='5 PM'
            labelColor='text-greyDark'
            className='w-full md:w-fit'
          />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer direction='col' className='m-auto  gap-8 pt-4 '>
        <WebinarDescription
          flexProps={{ direction: 'col' }}
          paragraphs={webinarDescriptions}
        />
        <FlexContainer direction='col'>
          <FlexContainer direction='col'>
            <Text level='h4' className='heading-4'>
              What will you learn
            </Text>
          </FlexContainer>
          <WebinarDescription
            flexProps={{
              direction: 'col',
              className: 'mt-4',
              itemCenter: false,
            }}
            paragraphs={webinarAudiences}
          />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default AboutWebinarContainer;
