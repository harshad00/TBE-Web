import { motion } from 'framer-motion';
import { InputFieldContainer } from '@/components';
import { StepUsernameProps } from '@/interfaces';

const StepUsername = ({
  username,
  onChange,
  isChecking,
  isAvailable,
}: StepUsernameProps) => (
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
      {!isChecking && isAvailable !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`absolute right-3 top-9 text-sm ${
            isAvailable ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {isAvailable ? 'Available' : 'Username taken'}
        </motion.div>
      )}
    </div>
  </div>
);

export default StepUsername;
