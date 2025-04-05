import React from 'react';
import { Text } from '@/components';

interface Props {
  username: string;
  error?: string;
  onChange: (value: string) => void;
}

const UsernameStep = ({ username, error, onChange }: Props) => (
  <div className='space-y-4'>
    <label className='block font-medium'>
      Choose Your Username
      <Text level='span' className='text-primary'>
        {' '}
        (Required)
      </Text>
    </label>
    <input
      type='text'
      value={username}
      onChange={(e) => onChange(e.target.value)}
      className='w-full p-2 border border-gray-300 rounded-md'
      placeholder='Enter your username'
    />
    {error && (
      <Text level='p' variant='ERROR' className='text-red-500'>
        {error}
      </Text>
    )}
  </div>
);

export default UsernameStep;
