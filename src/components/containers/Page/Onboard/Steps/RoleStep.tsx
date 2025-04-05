import React from 'react';
import { Text, RadioButtonContainer } from '@/components';
import { RoleStepProps } from '@/interfaces';

const RoleStep = ({
  selectedRole,
  error,
  onChange,
  options,
}: RoleStepProps) => (
  <div className='space-y-4'>
    <label className='block font-medium'>
      What Do You Do?
      <Text level='span' className='text-primary'>
        {' '}
        (Required)
      </Text>
    </label>
    <RadioButtonContainer
      options={options}
      selectedValue={selectedRole}
      onChange={onChange}
    />
    {error && (
      <Text level='p' variant='ERROR' className='text-red-500'>
        {error}
      </Text>
    )}
  </div>
);

export default RoleStep;
