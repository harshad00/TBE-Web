import React, { useState, useEffect, useCallback } from 'react';
import { PlaylistVideoTimeCard as PlaylistVideoTimeCardProps } from '@/interfaces';
import { convertSecondsToMinutes } from '@/utils';
import { routes } from '@/constant';

const PlaylistVideoTimeCard = ({
  usertime = 0,
  playlistId,
  userId,
}: PlaylistVideoTimeCardProps) => {
  const [time, setTime] = useState(usertime * 60);
  const [isRunning, setIsRunning] = useState(false);

  const apiUrl = `${routes.api.base}${routes.api.youfocusUserPlaylistById(
    playlistId,
    userId
  )}`;

  // Function to update learningTime in DB
  const updateLearningTime = useCallback(() => {
    const minutes = Math.floor(time / 60); // Convert seconds to minutes

    fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ learningTime: minutes }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log('Minutes saved in DB:', data))
      .catch((error) => console.error('Error updating timer:', error));
  }, [time, apiUrl]); // Use `time` instead of `usertime` for correct updates

  // Timer logic
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  // Auto-save every 2 minutes
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      updateLearningTime();
    }, 120000);

    return () => clearInterval(interval);
  }, [isRunning, updateLearningTime]);

  // Save when paused
  const toggleTimer = useCallback(() => {
    setIsRunning((prev) => {
      if (prev) updateLearningTime(); // If pausing, save immediately
      return !prev;
    });
  }, [updateLearningTime]);

  return (
    <div className='flex items-center justify-between w-full md:w-[65%] p-4 bg-gray-900 text-white rounded-lg shadow-md'>
      <button
        className='w-10 h-10 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-gray-600'
        aria-label='Go back'
      >
        <img className='w-5 h-5 p-1' src='/images/arrowback.svg' alt='Back' />
      </button>

      <div className='text-lg font-bold'>{convertSecondsToMinutes(time)}</div>

      <button
        className='w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-700'
        onClick={toggleTimer}
        aria-label={isRunning ? 'Pause' : 'Play'}
      >
        <img
          className='w-6 h-6 p-1'
          src={isRunning ? '/images/pause.svg' : '/images/play.svg'}
          alt={isRunning ? 'Pause' : 'Play'}
        />
      </button>
    </div>
  );
};

export default PlaylistVideoTimeCard;
