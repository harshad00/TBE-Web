import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { LevelProgressCard } from '@/components';
import { useUser, useGamification } from '@/hooks';

const UserPointButton = () => {
  const { user, isAuth, loading } = useUser();
  const {
    points,
    level,
    currentLevel,
    nextLevelName,
    pointsNeeded,
    minPoints,
    nextMinPoints,
  } = useGamification();

  // If the user is not authenticated or still loading, return null
  if (!isAuth || loading) return null;

  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          {/* User Points Display */}
          <Popover.Button
            className='outline-none font-bold text-xs rounded-full w-10 h-10 flex items-center justify-center border-2 border-primary text-primary'
            disabled={loading}
          >
            {points}
          </Popover.Button>

          {/* Progress Card (Popover) */}
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 mt-2 left-1/2 -translate-x-1/2 w-max'>
              <LevelProgressCard
                progress={points}
                level={level}
                currentLevel={currentLevel}
                nextLevel={nextLevelName}
                pointsNeeded={pointsNeeded}
                minPoints={minPoints}
                nextMinPoints={nextMinPoints}
              />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default UserPointButton;
