import {
  FlexContainer,
  LinkButton,
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

      <FlexContainer>
        <FlexContainer
          className='gradient-4 w-96 space-y-2 rounded-xl p-4'
          direction='col'
          itemCenter={true}
          justifyCenter={true}
        >
          <Text level='p' className='paragraph font-bold text-contentLight'>
            Register Now
          </Text>
          <LinkButton
            href={LINKS.juniorInWebEngineeringRegistrationLink}
            target='BLANK'
            buttonProps={{ variant: 'PRIMARY', text: 'Join Webinar' }}
            className='w-full md:w-auto'
          />
          <Text level='p' className='paragraph font-bold text-contentLight'>
            25 Slots only, Few seats left.
          </Text>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer className='mt-5' direction='col'>
        <FlexContainer direction='col'>
          <Text level='h4' className='heading-4'>
            About Webinar
          </Text>
          <FlexContainer
            justifyCenter={false}
            className=' w-68 justify-between py-2 '
          >
            <FlexContainer className='w-full  px-1 '>
              <Image
                src='/svg/calendar_grey.svg'
                className='w-4  '
                alt='calendar'
              />
              <Text level='p' className='paragraph px-2 text-greyDark'>
                29Apr,Saturday
              </Text>
            </FlexContainer>
            <FlexContainer className='w-full px-1 '>
              <Image src='/svg/clock_grey.svg' className='w-4' alt='clock' />
              <Text level='p' className='paragraph px-2 text-greyDark'>
                11 AM
              </Text>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer
          className='w-96  space-y-3 pt-4'
          direction='col'
          itemCenter={false}
        >
          <Text level='p' className='paragraph'>
            Programming is becoming everyone’s need these days. You want to
            build a software, You need programming. You want to get a job, you
            need programming.
          </Text>
          <Text level='p' className='paragraph'>
            First thing as a learner you do, is look for an online programs.
            There are so many programs available in the market.
          </Text>
          <Text level='p' className='paragraph'>
            With lot of options in market, You will be confused to choose an
            option.. and with that you’ll choose an expensive program that’ll
            cost you lakhs.
          </Text>
          <Text level='p' className='paragraph'>
            Everybody has a spending capacity and with a “Job in 6 Months”
            scheme, you’ll be prompted to buy a program.
          </Text>
          <Text level='p' className='paragraph'>
            Should you buy or should you not? We’ll discuss it in our programs.
          </Text>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer className='mt-5' direction='col'>
        <FlexContainer direction='col'>
          <Text level='h4' className='heading-4'>
            What will you learn
          </Text>
        </FlexContainer>
        <FlexContainer
          direction='col'
          className='w-96  space-y-3 pt-4'
          itemCenter={false}
        >
          <Text level='p' className='paragraph'>
            1. You’ll learn with your background, will programming be helpful
            for you?
          </Text>
          <Text level='p' className='paragraph'>
            2. Decide if you should be okay buying expensive bootcamps
          </Text>
          <Text level='p' className='paragraph'>
            3. Understand what it takes to break into Tech
          </Text>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer className='mt-5' direction='col'>
        <FlexContainer direction='col' className='py-2'>
          <Text level='h4' className='heading-4'>
            Meet your instructor
          </Text>
        </FlexContainer>
        <FlexContainer
          justifyCenter={false}
          className='w-64  justify-between px-1'
        >
          <div>
            <Image
              src='/images/sachin_shukla.png'
              alt='Co-founder Sachin Shukla'
            />
          </div>
          <FlexContainer direction='col'>
            <FlexContainer justifyCenter={false} className='Justify-between'>
              <Text level='h6' className='heading-6 font-bold text-white'>
                Sachin Kr. Shukla{' '}
              </Text>
              <Image
                src='/svg/linkedin.svg'
                className='w-3'
                alt='Co-founder Sachin Shukla'
              />
            </FlexContainer>

            <Text level='p' className='paragraph'>
              Co-founder
            </Text>
            <Text level='p' className='paragraph'>
              The Boring Education
            </Text>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer
          direction='col'
          itemCenter={true}
          className='w-full   items-start space-y-1  pt-4 pl-24'
        >
          <Text level='p' className='paragraph   w-96 '>
            1. Built Ed-tech startups since college.
          </Text>
          <Text level='p' className='paragraph  w-96 '>
            2. Worked with Newton School, Masai, Pesto & CueMath.
          </Text>
          <Text level='p' className='paragraph   w-96  '>
            3. Senior Software Engineer @PW.
          </Text>
        </FlexContainer>
        <FlexContainer className='py-5'>
          <FlexContainer
            className='gradient-6 w-96 space-y-2 rounded-xl p-4'
            direction='col'
            itemCenter={false}
            justifyCenter={true}
          >
            <Text
              level='p'
              className='paragraph px-2 font-bold text-contentLight'
            >
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
              We at TBE, building the most affordable Tech courses that doesn’t
              cost you lakhs in an environment like we taught ourselves.
            </Text>
            <LinkButton
              href={LINKS.juniorInWebEngineeringRegistrationLink}
              target='BLANK'
              buttonProps={{ variant: 'PRIMARY', text: 'Explore cohorts' }}
              className='w-full md:w-auto '
            />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default WebinarHeader;
