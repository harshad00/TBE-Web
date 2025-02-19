import React, { useState } from 'react';
import { Button, SectionHeaderContainer, FlexContainer } from '@/components';

const PlaylistRecommend = () => {
  const [copied, setCopied] = useState(false);

  const copyCurrentPageUrl = () => {
    const currentUrl = window.location.href; // Get current page URL
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setCopied(true); // Show message
        setTimeout(() => setCopied(false), 2000); // Hide after 2s
      })
      .catch((err) => console.error('Failed to copy URL:', err));
  };
  const Recommend = () => {
    //  for Recommend
  };
  return (
    <FlexContainer direction='col' className='relative rounded-lg mt-2 md:mt-4'>
      <div className='w-full max-w-md  '>
        <SectionHeaderContainer
          heading='Recommend'
          focusText='Playlist'
          headingLevel={3}
          subtext='Share it With Your Friend and Learn Together'
        />
      </div>

      <div className='mt-2 md:mt-4 flex justify-center gap-2'>
        <Button
          variant='PRIMARY'
          className='text-nowrap text-white rounded-s-md'
          text='Recommend'
          onClick={Recommend}
        />
        <Button
          variant='OUTLINE'
          className='text-nowrap rounded-s-md '
          text='Copy Link'
          onClick={copyCurrentPageUrl}
        />
      </div>
      {/* Show popup when copied */}
      {copied && (
        <div className='absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md shadow-md'>
          ✅ Playlist URL copied!
        </div>
      )}
    </FlexContainer>
  );
};

export default PlaylistRecommend;
