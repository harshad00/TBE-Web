import { LINKS, STATIC_FILE_PATH } from '@/constant';
import Link from 'next/link';
import React from 'react';
import { Image, Pill, Section, FlexContainer } from '@/components';
import { Text } from '@/components';

const Community = () => {
  return (
    <Section>
      <FlexContainer className='gradient-5 w-full p-4 flex-col  gap-4 rounded-2'>
        <Image
          src={`${STATIC_FILE_PATH.svg}/community.svg`}
          fullHeight={false}
          fullWidth={false}
          alt='community'
        />
        <FlexContainer className='gap-1' direction='col'>
          <Text
            level='h3'
            className='heading-3 text-contentDark'
            textCenter={true}
          >
            Community For Everyone
          </Text>
          <Text level='p' textCenter={true} className='text-contentDark'>
            You excel where you’re supported. Connect with like-minded peers who
            share the same goal as you.
          </Text>
        </FlexContainer>
        <FlexContainer direction='col' className='gap-2'>
          <Text
            level='h5'
            className='heading-5 text-contentDark'
            textCenter={true}
          >
            In Community, You'll
          </Text>
          <FlexContainer className='gap-1 justify-center items-center flex-wrap'>
            {[
              'Attend Tech Workshops',
              'Connect with Like-minded Peers',
              'Share your journey with others',
              'Find accountability parter',
            ].map((goal, index) => (
              <FlexContainer key={index} className='w-full md:w-[35%]'>
                <Pill text={goal} variant='GHOST' widthFull={true} />
              </FlexContainer>
            ))}
          </FlexContainer>
          <Link
            href={LINKS.whatsappCommunity}
            className='gradient-3 button-text rounded-[5px] text-center px-5 py-2 w-full sm:w-auto'
            target='block'
          >
            Join Community
          </Link>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default Community;
