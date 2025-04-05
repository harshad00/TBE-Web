import React from 'react';
import { Text, PhoneInput } from '@/components';
import { ContactStepProps } from '@/interfaces';

const ContactStep = ({ phoneNumber, error, onChange }: ContactStepProps) => (
  <div className='space-y-4'>
    <h1 className='text-2xl font-bold'>Hello</h1>
    <label className='block font-medium'>
      Enter Your Phone Number
      <Text level='span' className='text-primary'>
        {' '}
        (Required)
      </Text>
    </label>
    <PhoneInput onNumberChange={onChange} />
    {error && (
      <Text level='p' variant='ERROR' className='text-red-500'>
        {error}
      </Text>
    )}
  </div>
);

export default ContactStep;
