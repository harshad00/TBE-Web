import React from 'react';
import { Text } from '@/components';
import { LevelInfoProps } from '@/interfaces';

const UserLevelContainer = ({
  level,
  pointsNeeded,
  currentLevel,
  nextLevel,
}: LevelInfoProps) => {
  return (
    <div className='mt-3 sm:mt-0 sm:ml-4 text-center sm:text-left'>
      <Text className='text-gray-500 text-sm' level='p'>
        YOU'REAT
      </Text>
      <Text className='text-red-500 font-bold text-base md:text-lg' level='p'>
        Level {level} : {currentLevel}
      </Text>
      <div className='mt-2 p-1 w-full bg-gradient-to-r from-pink-400 to-yellow-400 font-semibold py-1.5 rounded-md text-center text-xs md:text-base'>
        <Text level='p'>
          {' '}
          {pointsNeeded !== 0
            ? `${pointsNeeded} Pts to ${nextLevel}`
            : `You are at the highest level!`}
        </Text>
      </div>
    </div>
  );
};

export default UserLevelContainer;
