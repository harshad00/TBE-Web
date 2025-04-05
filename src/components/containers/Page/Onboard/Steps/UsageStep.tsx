import React from 'react';
import { Text, CheckboxButtonContainer } from '@/components';
import { UsageStepProps } from '@/interfaces';
const UsageStep = ({
  selectedOptions,
  error,
  onChange,
  options,
}: UsageStepProps) => (
  <div className='space-y-4'>
    <label className='block font-medium'>
      How Would You Use The Platform?
      <Text level='span' className='text-primary'>
        {' '}
        (Required)
      </Text>
    </label>
    <CheckboxButtonContainer
      options={options}
      selectedValues={selectedOptions}
      onChange={onChange}
    />
    {error && (
      <Text level='p' variant='ERROR' className='text-red-500'>
        {error}
      </Text>
    )}
  </div>
);

export default UsageStep;
