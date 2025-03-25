import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { LevelProgressCard } from '@/components';
import { useUser, useGamification } from '@/hooks';

const UserPointButton = () => {
  const { user, isAuth, loading } = useUser();
  const { points, userLevelData } = useGamification();

  // If the user is not authenticated or still loading, return null
  if (!isAuth || loading) return null;

  return (
    <Popover className='relative p-0 w-10 h-10 rounded-full border-2 border-primary'>
      {({ open }) => (
        <>
          {/* User Points Display */}
          <Popover.Button className='outline-none font-bold text-xs rounded-full p-1 w-10 h-10 flex items-center justify-center text-primary'>
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
            <Popover.Panel className='absolute z-10 mt-1 flex w-screen max-w-max -translate-x-2/3'>
              <LevelProgressCard
                progress={points}
                level={userLevelData?.level}
                currentLevel={userLevelData?.currentLevel ?? ''}
                nextLevel={userLevelData?.nextLevelName ?? ''}
                pointsNeeded={userLevelData?.pointsNeeded ?? 0}
                minPoints={userLevelData?.minPoints ?? 0}
                nextMinPoints={userLevelData?.nextMinPoints ?? 0}
              />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default UserPointButton;
