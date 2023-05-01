import {
  FlexContainer,
  Section,
  Text,
  Image,
  Pill,
  CountdownTimerContainer,
  WebinarRegisterContainer,
  IconPill,
  WebinarInstructor,
} from '@/components';
import { webinar } from '@/data';

const WebinarHeader = () => {
  console.log(webinar);
  return (
    <Section>
      <FlexContainer direction='col'>
        <FlexContainer
          itemCenter={true}
          justifyCenter={true}
          className='m-auto w-full lg:w-3/4'
        >
          <div className='relative w-full overflow-hidden rounded-2'>
            <Image
              className='absolute object-cover'
              src='/images/coding_bg.png'
              alt='is-programming-for-you'
            />
            <FlexContainer direction='col' className='p-4 md:p-8'>
              <Pill
                text='Free Webinar'
                variant='SECONDARY'
                textStyleClasses='text-contentLight'
              />
              <FlexContainer direction='col' className='mt-6 w-full gap-1'>
                <Text level='h3' textCenter={true} className='heading-3'>
                  Is Programming for you?
                </Text>

                <Text level='p' className='paragraph' textCenter={true}>
                  Understand why everybody wants to be in Tech and should you
                  learn Tech or not.
                </Text>
              </FlexContainer>
              <WebinarInstructor
                imagePath='/images/sachin_shukla.png'
                imageAltText='Co-founder Sachin Shukla'
                name='Sachin Kr. Shukla'
                position='Co-founder The Boring Education'
              />
              <FlexContainer
                className='mt-4 gap-4 md:mt-6'
                justifyCenter={false}
              >
                <IconPill
                  iconPath='/svg/calendar.svg'
                  iconAltText='webinar-calendar'
                  label='29 Apr, Saturday'
                  backgroundColor=''
                />
                <IconPill
                  iconPath='/svg/clock.svg'
                  iconAltText='webinar-clock'
                  label='5 PM'
                  backgroundColor=''
                />
              </FlexContainer>
              <CountdownTimerContainer
                labelText='Starts in'
                timerList={['03 d', '02 h', '01 m']}
              />
            </FlexContainer>
          </div>
        </FlexContainer>
      </FlexContainer>
      <WebinarRegisterContainer />
    </Section>
  );
};

export default WebinarHeader;
