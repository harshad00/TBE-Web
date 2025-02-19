import React, { useState } from 'react';
import { Button, SectionHeaderContainer, FlexContainer } from '@/components';
import { routes } from '@/constant';

const PlaylistRecommend = ({
  playlistId,
  userId,
  recommend,
}: {
  playlistId: string;
  userId: string;
  recommend: boolean;
}) => {
  const [isRecommended, setIsRecommended] = useState(recommend);
  const [copied, setCopied] = useState(false);
  const [thankYouMessage, setThankYouMessage] = useState(false);

  const copyCurrentPageUrl = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error('Failed to copy URL:', err));
  };

  const handleRecommend = async () => {
    try {
      const response = await fetch(
        `${routes.api.base}${routes.api.youfocusUserPlaylistById(
          playlistId,
          userId
        )}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ isRecommended: true }),
        }
      );

      if (response.ok) {
        setIsRecommended(true); // ✅ Disable button after success
        setThankYouMessage(true); // ✅ Show thank-you message

        setTimeout(() => setThankYouMessage(false), 3000); // Hide after 3s
      } else {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
    } catch (error) {
      console.error('Error recommending playlist:', error);
    }
  };

  return (
    <FlexContainer direction='col' className='relative rounded-lg mt-2 md:mt-4'>
      <div className='w-full max-w-md'>
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
          className={`text-nowrap text-white rounded-s-md ${
            isRecommended ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          text='Recommend'
          onClick={!isRecommended ? handleRecommend : undefined}
        />
        <Button
          variant='OUTLINE'
          className='text-nowrap rounded-s-md'
          text='Copy Link'
          onClick={copyCurrentPageUrl}
        />
      </div>

      {/* ✅ Show thank-you message when recommended */}
      {thankYouMessage && (
        <div className='absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-sm px-3 py-1 rounded-md shadow-md'>
          ✅ Thank you for your recommendation! 😊
        </div>
      )}

      {/* ✅ Show copied message */}
      {copied && (
        <div className='absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md shadow-md'>
          ✅ Playlist URL copied!
        </div>
      )}
    </FlexContainer>
  );
};

export default PlaylistRecommend;
