import React, { useState, useEffect, useCallback } from 'react';
import { PlaylistVideoTimeCard as PlaylistVideoTimeCardProps } from '@/interfaces';
import { convertSecondsToMinutes } from '@/utils';
import { routes } from '@/constant';
import useApi from '@/hooks/useApi';
import { FlexContainer, Image, Text } from '@/components';
import { PauseIcon, PlayIcon } from '@heroicons/react/20/solid';

const PlaylistVideoTimeCard = ({
  usertime = 0,
  playlistId,
  userId,
}: PlaylistVideoTimeCardProps) => {
  const [time, setTime] = useState(usertime * 60);
  const [isRunning, setIsRunning] = useState(false);

  const apiUrl = `${routes.api.youfocusUserPlaylistById(playlistId, userId)}`;

  const { makeRequest } = useApi('update-user-learning-time');

  const updateLearningTime = useCallback(() => {
    const minutes = Math.floor(time / 60);

    makeRequest({
      url: apiUrl,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ learningTime: minutes }),
    }).catch((error) => console.error('Error updating timer:', error));
  }, [time, makeRequest, apiUrl]);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      updateLearningTime();
    }, 120000);

    return () => clearInterval(interval);
  }, [isRunning, updateLearningTime]);

  const toggleTimer = useCallback(() => {
    setIsRunning((prev) => {
      if (prev) updateLearningTime();
      return !prev;
    });
  }, [updateLearningTime]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      updateLearningTime();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [updateLearningTime]);

  return (
    <FlexContainer
      direction='row'
      className='gap-2 w-full justify-between p-2 bg-dark text-white rounded-lg shadow-md'
    >
      <button
        className='w-10 h-10 flex items-center justify-center bg-white text-white rounded-full hover:bg-gray-200'
        aria-label='Go back'
      >
        <Image
          className='w-5 h-5 p-[4px]'
          src='/images/arrowback.svg'
          alt='Back'
          fullWidth={false}
          fullHeight={false}
        />
      </button>

      <Text level='span' className='strong-text text-contentDark'>
        {convertSecondsToMinutes(time)}
      </Text>

      <button
        className='w-12 h-12 flex items-center justify-center bg-white text-white rounded-full hover:bg-gray-200'
        onClick={toggleTimer}
        aria-label={isRunning ? 'Pause' : 'Play'}
      >
        {isRunning ? (
          <PauseIcon
            className='w-5 h-5 p-[4px] text-gray-700'
            aria-hidden='true'
          />
        ) : (
          <PlayIcon
            className='w-5 h-5 p-[4px] text-gray-700'
            aria-hidden='true'
          />
        )}
      </button>
    </FlexContainer>
  );
};

export default PlaylistVideoTimeCard;
