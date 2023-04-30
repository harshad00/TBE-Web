import {
  FlexContainer,
  Section,
  SectionHeaderContainer,
  Text,
  Image,
} from '@/components';
import { LINKS } from '@/constant';

const WebinarHeader = () => {
  return (
    <Section>
      <FlexContainer className='p-4 md:px-12 md:py-8' direction='col'>
        <FlexContainer itemCenter={true} justifyCenter={true}>
          <div className='relative w-full max-w-lg overflow-hidden rounded-2'>
            <Image
              className='absolute inset-0 object-cover'
              src='/images/coding_bg.png'
              alt=''
            />
            <FlexContainer direction='col' className='px-2 py-4'>
              <SectionHeaderContainer
                heading='Free Webinar'
                focusText=''
                headingLevel={5}
                className='rounded-md bg-secondary p-1 text-dark'
              />
              <FlexContainer
                direction='col'
                justifyCenter={true}
                className='mt-1 w-full'
              >
                <Text level='h3' textCenter={true} className='heading-3'>
                  Is Programming for you?
                </Text>

                <Text level='p' className='paragraph pt-1' textCenter={true}>
                  Understand why everybody wants to be in Tech and should you
                  learn Tech or not.
                </Text>
              </FlexContainer>
              <FlexContainer className='w-full gap-2 pt-1'>
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
              <FlexContainer className='mt-4 gap-4'>
                <FlexContainer className='gap-2'>
                  <Image
                    src='/svg/calendar.svg'
                    className='w-4'
                    fullWidth={false}
                    alt='calendar'
                  />
                  <Text level='p' className='strong-text'>
                    29 Apr, Saturday
                  </Text>
                </FlexContainer>
                <FlexContainer className='gap-2'>
                  <Image
                    src='/svg/clock.svg'
                    className='w-4'
                    fullWidth={false}
                    alt='clock'
                  />
                  <Text level='p' className='strong-text'>
                    11 AM
                  </Text>
                </FlexContainer>
              </FlexContainer>
            </FlexContainer>
          </div>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default WebinarHeader;
