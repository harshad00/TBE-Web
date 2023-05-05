import {
  FlexContainer,
  IconPill,
  Text,
  WebinarDescription,
} from '@/components';
import { AboutWebinarContainerProps } from '@/interfaces';
import { SVG_BASE_PATH, IMAGE_BASE_PATH } from '@/data';
import { formatDate } from '@/utils';

const AboutWebinarContainer = ({
  descriptions,
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
            iconPath={`${SVG_BASE_PATH}/calendar_grey.svg`}
            iconAltText='webinar-calendar'
            label={formatDate(date)}
            labelColor='text-greyDark'
            className='w-full md:w-fit'
          />
          <IconPill
            iconPath={`${SVG_BASE_PATH}/clock_grey.svg`}
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
          paragraphs={descriptions}
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
