import {
  FlexContainer,
  Section,
  Text,
  Image,
  Pill,
  CountdownTimerContainer,
  WebinarRegisterContainer,
  IconPill,
} from '@/components';

const WebinarHeader = () => {
  return (
    <Section>
      <FlexContainer direction='col'>
        <FlexContainer
          itemCenter={true}
          justifyCenter={true}
          className='m-auto w-3/4'
        >
          <div className='relative w-full overflow-hidden rounded-2'>
            <Image
              className='absolute object-cover'
              src='/images/coding_bg.png'
              alt='is-programming-for-you'
            />
            <FlexContainer direction='col' className='p-8'>
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
              <FlexContainer className='mt-6 gap-2'>
                <Image
                  src='/images/sachin_shukla.png'
                  alt='Co-founder Sachin Shukla'
                  className='w-20'
                />
                <FlexContainer
                  direction='col'
                  itemCenter={false}
                  className='items-start'
                >
                  <Text level='h5' className='heading-5 font-bold text-white'>
                    Sachin Kr. Shukla
                  </Text>
                  <Text level='p' className='paragraph'>
                    Co-founder at The Boring Education
                  </Text>
                </FlexContainer>
              </FlexContainer>
              <FlexContainer className='mt-6 gap-4'>
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
