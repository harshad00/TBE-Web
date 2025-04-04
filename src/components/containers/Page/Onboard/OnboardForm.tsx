import React, { useState } from 'react';
import {
  Text,
  CheckboxButtonContainer,
  RadioButtonContainer,
  PhoneInput,
  Button,
  Toast,
} from '@/components';
import { USER_OPTIONS, USER_ROLEOPTIONS } from '@/constant';

const OnboardForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    selectedRole: '',
    selectedOptions: [] as string[],
    phoneNumber: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.username.trim()) newErrors.username = 'USERNAME IS REQUIRED';
    if (!formData.selectedRole) newErrors.selectedRole = 'PLEASE SELECT A ROLE';
    if (formData.selectedOptions.length === 0)
      newErrors.selectedOptions = 'PLEASE SELECT AT LEAST ONE OPTION';
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = 'PHONE NUMBER IS REQUIRED';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setToastMessage('PLEASE FILL IN ALL REQUIRED FIELDS');
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form Submitted', formData);
      setToastMessage('FORM SUBMITTED SUCCESSFULLY');
    }
  };

  return (
    <div className='w-full md:max-w-[60%] px-4 py-6  md:border md:rounded-sm shadow-xl space-y-4 mx-auto'>
      <label className='mb-2 block font-medium'>
        1. CHOOSE YOUR USERNAME
        <Text level='span' className='text-primary'>
          {' '}
          (REQUIRED)
        </Text>
      </label>
      <input
        type='text'
        value={formData.username}
        onChange={(e) => handleChange('username', e.target.value)}
        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='Enter your username'
      />
      {errors.username && (
        <Text level='p' variant='ERROR' className='text-red-500'>
          {errors.username}
        </Text>
      )}

      <label className='mb-2 block font-medium'>
        2. WHAT DO YOU DO?
        <Text level='span' className='text-primary'>
          {' '}
          (REQUIRED)
        </Text>
      </label>
      <RadioButtonContainer
        options={USER_ROLEOPTIONS}
        selectedValue={formData.selectedRole}
        onChange={(value) => handleChange('selectedRole', value)}
        className='w-full'
      />
      {errors.selectedRole && (
        <Text level='p' variant='ERROR' className='text-red-500'>
          {errors.selectedRole}
        </Text>
      )}

      <label className='mb-2 block font-medium'>
        3. HOW WOULD YOU USE THE PLATFORM?
        <Text level='span' className='text-primary'>
          {' '}
          (REQUIRED)
        </Text>
      </label>
      <CheckboxButtonContainer
        options={USER_OPTIONS}
        selectedValues={formData.selectedOptions}
        onChange={(value) => handleChange('selectedOptions', value)}
        className='w-full'
      />
      {errors.selectedOptions && (
        <Text level='p' variant='ERROR' className='text-red-500'>
          {errors.selectedOptions}
        </Text>
      )}

      <label className='mb-2 block font-medium'>
        4. ENTER YOUR PHONE NUMBER
        <Text level='span' className='text-primary'>
          {' '}
          (REQUIRED)
        </Text>
      </label>
      <PhoneInput
        onNumberChange={(value) => handleChange('phoneNumber', value)}
        className='w-full'
      />
      {errors.phoneNumber && (
        <Text level='p' variant='ERROR' className='text-red-500'>
          {errors.phoneNumber}
        </Text>
      )}

      <Button
        variant='PRIMARY'
        text='SUBMIT'
        onClick={handleSubmit}
        className='mx-auto mt-4 p-3 rounded-md'
      />

      {toastMessage && (
        <Toast
          message={toastMessage}
          type={Object.keys(errors).length > 0 ? 'error' : 'success'}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
};

export default OnboardForm;
