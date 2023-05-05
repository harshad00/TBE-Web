import React, { useCallback, useEffect, useState } from 'react';
import { FlexContainer, Text, TimerItem } from '@/components';
import {
  CountdownTimerContainerProps,
  CountdownTimerProps,
} from '@/interfaces';

const CountdownTimerContainer = ({ date }: CountdownTimerContainerProps) => {
  const [timeLeft, setTimeLeft] = useState<CountdownTimerProps>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate countdown
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(date) - +new Date();

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }

    return timeLeft;
  }, [date, timeLeft]);

  useEffect(() => {
    // calculateTimeLeft();

    const timer = setTimeout(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearTimeout(timer);
  }, [calculateTimeLeft]);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <FlexContainer direction='col' className='mt-6 gap-2'>
      <Text level='p' className='strong-text'>
        Starts in
      </Text>
      <FlexContainer className='gap-2'>
        {timeLeft.days > 0 ? (
          <TimerItem timer={`${formatTime(timeLeft.days)} d`} />
        ) : (
          '0'
        )}
        {timeLeft.hours > 0 ? (
          <TimerItem timer={`${formatTime(timeLeft.hours)} h`} />
        ) : (
          '0'
        )}
        {timeLeft.minutes > 0 ? (
          <TimerItem timer={`${formatTime(timeLeft.minutes)} m`} />
        ) : (
          '0'
        )}
        {timeLeft.seconds > 0 ? (
          <TimerItem timer={`${formatTime(timeLeft.seconds)} s`} />
        ) : (
          '0'
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default CountdownTimerContainer;
