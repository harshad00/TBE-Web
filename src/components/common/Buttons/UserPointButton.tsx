import { Fragment } from 'react';
import { Popover, PopoverButton, Transition } from '@headlessui/react';
import { UserLevelProgressContainer } from '@/components';
import { useUser, useGamification } from '@/hooks';

const UserPointButton = () => {
  const { isAuth, loading } = useUser();
  const {
    points,
    currentLevel,
    currentLevelName,
    nextLevelName,
    pointsLeftToNextLevel,
    percentageProgress,
  } = useGamification();

  if (!isAuth || loading) return null;

  return (
    <Popover className='flex p-1 w-10 h-10 justify-center rounded-full border-2 border-primary hover:bg-primary'>
      {() => (
        <>
          <PopoverButton className='outline-none  font-bold text-s flex items-center justify-center text-primary hover:text-white'>
            {points}
          </PopoverButton>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 mt-5 flex w-screen max-w-max md:-translate-x-1/3'>
              <UserLevelProgressContainer
                points={points}
                currentLevel={currentLevel}
                currentLevelName={currentLevelName}
                nextLevelName={nextLevelName}
                pointsLeftToNextLevel={pointsLeftToNextLevel}
                percentageProgress={percentageProgress}
              />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default UserPointButton;
