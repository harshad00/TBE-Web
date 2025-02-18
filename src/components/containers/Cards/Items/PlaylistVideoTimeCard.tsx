import React, { useState, useEffect, useCallback } from 'react';
import { PlaylistVideoTimeCard as PlaylistVideoTimeCardProps } from '@/interfaces';
import {convertSecondsToMinutes} from '@/utils';

const PlaylistVideoTimeCard = ({
  usertime = 0,
}: PlaylistVideoTimeCardProps) => {
  const [time, setTime] = useState(usertime * 60); // Convert minutes to seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTime(usertime * 60);
  }, [usertime]);

  const toggleTimer = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  useEffect(() => {
    let timer: number | undefined;
    if (isRunning) {
      timer = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && timer) {
      window.clearInterval(timer);
    }
    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [isRunning]);

  return (
    <div className='flex items-center justify-between w-full max-w-sm p-4 bg-gray-900 text-white rounded-lg shadow-md'>
      <button
        className='w-10 h-10 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-gray-600'
        aria-label="Go back"
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
