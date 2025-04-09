import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { InputFieldContainer } from '@/components';
import { useUsernameAvailability } from '@/hooks';
import { StepUsernameProps } from '@/interfaces';

const StepUsername = ({
  username,
  onChange,
  setIsAvailable,
}: StepUsernameProps) => {
  const { isAvailable, isChecking } = useUsernameAvailability(username);

  useEffect(() => {
    setIsAvailable?.(isAvailable);
  }, [isAvailable]);

  return (
    <div className='space-y-4'>
      <div className='relative'>
        <InputFieldContainer
          label='Username'
          type='text'
          value={username}
          onChange={onChange}
          className='w-full'
        />

        {isChecking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='absolute right-3 top-9 text-sm text-gray-500'
          >
            Checking...
          </motion.div>
        )}

        {!isChecking && isAvailable === true && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='absolute right-3 top-9 text-sm text-red-500'
          >
            Not available.
          </motion.div>
        )}

        {!isChecking && isAvailable === false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='absolute right-3 top-9 text-sm text-green-500'
          >
            Available
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StepUsername;
