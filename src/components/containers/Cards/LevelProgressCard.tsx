import React from 'react';
import { FlexContainer } from '@/components';
import { ProgressRing, UserLevelContainer } from '@/components';
import { LevelProgressCardProps } from '@/interfaces';
import { calculateProgressPercentage } from '@/utils';

const LevelProgressCard = ({
  progress,
  level,
  pointsNeeded,
  currentLevel,
  nextLevel,
  nextMinPoints,
}: LevelProgressCardProps) => {
  const percentage = calculateProgressPercentage(progress, nextMinPoints);

  return (
    <div className='bg-white p-3 rounded-2xl  shadow-md border relative w-full min-w-[200px] max-w-[320px]'>
      <FlexContainer className='flex-col flex-nowrap items-center sm:flex-row'>
        <ProgressRing progress={percentage} point={progress} />
        <UserLevelContainer
          level={level}
          pointsNeeded={pointsNeeded}
          currentLevel={currentLevel}
          nextLevel={nextLevel}
        />
      </FlexContainer>
    </div>
  );
};

export default LevelProgressCard;
