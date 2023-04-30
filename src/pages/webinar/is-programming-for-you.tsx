import React from 'react';
import {
  WebinarHeader,
  SEO,
  FlexContainer,
  Text,
  LinkButton,
  Image,
  WebinarRegisterContainer,
  AboutWebinarContainer,
} from '@/components';
import { PageSlug } from '@/interfaces';
import { LINKS } from '@/constant';

const IsProgrammingForYouLanding = () => {
  const slug: PageSlug = '/is-programming-for-you';
  return (
    <React.Fragment>
      <SEO slug={slug} />
      <WebinarHeader />
      <AboutWebinarContainer />

      <FlexContainer direction='col'>
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

      <FlexContainer direction='col'>
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
    </React.Fragment>
  );
};

export default IsProgrammingForYouLanding;
