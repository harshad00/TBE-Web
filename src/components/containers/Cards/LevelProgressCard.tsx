import React from 'react';
import { FlexContainer } from '@/components';
import { ProgressRing, LevelInfo } from '@/components';
import { LevelProgressCardProps } from '@/interfaces';

const LevelProgressCard = ({
  progress,
  level,
  pointsNeeded,
}: LevelProgressCardProps) => {
  return (
    <div className='bg-white p-3 rounded-2xl shadow-md border relative w-full min-w-[200px] max-w-[320px]'>
      <FlexContainer className='flex-col items-center sm:flex-row'>
        <ProgressRing progress={progress} max={1000} />
        <LevelInfo level={level} pointsNeeded={pointsNeeded} />
      </FlexContainer>
    </div>
  );
};

export default LevelProgressCard;
