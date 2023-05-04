import React, { useEffect, useState } from "react";
import { FlexContainer, Text, TimerItem } from '@/components';
import { CountdownTimerContainerProps } from '@/interfaces';

const CountdownTimerContainer = ({
  startDate, endDate,
}: CountdownTimerContainerProps) => {

  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [endDate]);

  const formatTime = (time: number) => time.toString().padStart(2, "0");
  return (
    <FlexContainer direction='col' className='mt-6 gap-2'>
      <Text level='p' className='strong-text'>
        Starts in
      </Text>
      <FlexContainer className='gap-2'>
        {timeLeft.days > 0 ? (
          <TimerItem timer={`${formatTime(timeLeft.days)} D`} />
        ) : '0'}
        {timeLeft.hours > 0 ? (
          <TimerItem timer={`${formatTime(timeLeft.hours)} H`} />
        ) : '0'}
        {timeLeft.minutes > 0 ? (
          <TimerItem timer={`${formatTime(timeLeft.hours)} M`} />
        ) : '0'}
      </FlexContainer>
    </FlexContainer>
  );
};

export default CountdownTimerContainer;
