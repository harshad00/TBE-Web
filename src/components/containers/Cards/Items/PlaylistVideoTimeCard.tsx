import React, { useState, useEffect, useCallback } from 'react';
import { PlaylistVideoTimeCard as PlaylistVideoTimeCardProps } from '@/interfaces';
import { convertSecondsToMinutes } from '@/utils';
import { routes } from '@/constant';

const PlaylistVideoTimeCard = ({
  usertime,
  playlistId,
  userId,
}: PlaylistVideoTimeCardProps) => {
  const [time, setTime] = useState(usertime * 60); // Convert minutes to seconds
  const [isRunning, setIsRunning] = useState(false);

  const apiUrl = `${routes.api.base}${routes.api.youfocusUserPlaylistById(
    playlistId,
    userId
  )}`;

  // Function to update learningTime in DB (only store minutes)
  const updateLearningTime = useCallback(() => {
    const minutes = Math.floor(time / 60); // Convert seconds to minutes

    fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        learningTime: minutes, // Store only minutes
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log('Minutes saved in DB:', data))
      .catch((error) => console.error('Error updating timer:', error));
  }, [time, apiUrl]);

  // Effect to handle the timer logic
  useEffect(() => {
    let timer: number | undefined;

    if (isRunning) {
      timer = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      if (timer) window.clearInterval(timer);
    }

    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [isRunning]);

  // Auto-save every 2 minutes
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      updateLearningTime(); // Save every 2 minutes
    }, 120000); // 120,000ms = 2 minutes

    return () => clearInterval(interval);
  }, [isRunning, time, updateLearningTime]);

  // Save when paused
  const toggleTimer = useCallback(() => {
    setIsRunning((prev) => {
      const newState = !prev;
      if (prev) updateLearningTime(); // If pausing, save immediately
      return newState;
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
