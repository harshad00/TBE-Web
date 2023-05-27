import {
  FlexContainer,
  IconPill,
  Text,
  WorkshopDescription,
} from '@/components';
import { AboutWorkshopContainerProps } from '@/interfaces';
import { SVG_BASE_PATH } from '@/data';
import { formatDate } from '@/utils';

const AboutWorkshopContainer = ({
  descriptions,
  whatWillYouLearn,
  date,
  time,
}: AboutWorkshopContainerProps) => {
  return (
    <FlexContainer direction='col' className='m-auto w-3/4 lg:w-1/3'>
      <FlexContainer direction='col'>
        <Text level='h4' className='heading-4'>
          About this workshop
        </Text>
        <FlexContainer className='mt-2 gap-2'>
          <IconPill
            iconPath={`${SVG_BASE_PATH}/calendar_grey.svg`}
            iconAltText='workshop-calendar'
            label={formatDate(date)}
            labelColor='text-greyDark'
            className='w-full md:w-fit'
          />
          <IconPill
            iconPath={`${SVG_BASE_PATH}/clock_grey.svg`}
            iconAltText='workshop-clock'
            label={time}
            labelColor='text-greyDark'
            className='w-full md:w-fit'
          />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer direction='col' className='m-auto  gap-8 pt-4 '>
        <WorkshopDescription
          flexProps={{ direction: 'col' }}
          paragraphs={descriptions}
        />
        <FlexContainer direction='col'>
          <FlexContainer direction='col'>
            <Text level='h4' className='heading-4'>
              What will you learn
            </Text>
          </FlexContainer>
          <WorkshopDescription
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

export default AboutWorkshopContainer;
