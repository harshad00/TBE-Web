import {
  FlexContainer,
  IconPill,
  Text,
  WebinarDescription,
} from '@/components';
import { AboutWebinarContainerProps } from '@/interfaces';

const AboutWebinarContainer = ({
  aboutText,
  whatWillYouLearn,
  date,
  time,
}: AboutWebinarContainerProps) => {
  return (
    <FlexContainer direction='col' className='m-auto w-3/4 lg:w-1/3'>
      <FlexContainer direction='col'>
        <Text level='h4' className='heading-4'>
          About this webinar
        </Text>
        <FlexContainer className='mt-2 gap-2'>
          <IconPill
            iconPath='/svg/calendar_grey.svg'
            iconAltText='webinar-calendar'
            label={date}
            labelColor='text-greyDark'
            className='w-full md:w-fit'
          />
          <IconPill
            iconPath='/svg/clock_grey.svg'
            iconAltText='webinar-clock'
            label={time}
            labelColor='text-greyDark'
            className='w-full md:w-fit'
          />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer direction='col' className='m-auto  gap-8 pt-4 '>
        <WebinarDescription
          flexProps={{ direction: 'col' }}
          paragraphs={aboutText}
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
            paragraphs={whatWillYouLearn}
          />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default AboutWebinarContainer;
