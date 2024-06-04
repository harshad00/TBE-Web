import { COMMUNITY_SECTION, LINKS } from '@/constant';
import Link from 'next/link';
import React from 'react';
import FlexContainer from '../common/FlexContainer';
import { Image, Pill } from '@/components';
import { Text } from '@/components';

function Community() {
  return (
    <FlexContainer className='gradient-5 w-full p-4 flex-col  gap-4'>
      <FlexContainer className='w-full max-w-[98%] md:max-w-[50%]'>
        <Image
          src={COMMUNITY_SECTION.communityBannerImage}
          fullHeight={true}
          fullWidth={true}
          alt='community'
        />
      </FlexContainer>
      <FlexContainer className='text-white gap-1  max-w-[98%] md:max-w-[50%]'>
        <Text level='h1' className='font-bold text-2xl'>
          {COMMUNITY_SECTION.communityTitleLine}
        </Text>
        <Text level='p' className='text-center'>
          {COMMUNITY_SECTION.communityDescriptionLine}
        </Text>
      </FlexContainer>
      <FlexContainer className=' flex-col text-white gap-1  max-w-[98%] md:max-w-[50%]'>
        <Text level='h1' className='font-bold text-2xl'>
          In Community, You can
        </Text>
        <FlexContainer className='flex-col gap-3 justify-center items-center'>
          {COMMUNITY_SECTION.goalOfCommunity.map((goal, i) => (
            <Pill text={goal} variant='GHOST' widthFull={true} key={i} />
          ))}
          <Link
            href={LINKS.whatsappCommunity}
            className='bg-[#FFA751] w-full text-black rounded-[5px] text-center px-5 py-2 font-bold'
            target='block'
          >
            Join Community
          </Link>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
}

export default Community;
