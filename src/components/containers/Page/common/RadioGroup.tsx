import React from 'react';
import { RadioButton } from '@/components';
import { RadioGroupProps } from '@/interfaces';

const RadioGroup = ({ options, selectedValue, onChange }: RadioGroupProps) => {
  return (
    <div className='flex flex-wrap justify-center gap-2'>
      {options.map((option, index) => (
        <RadioButton
          key={index}
          label={option.label}
          value={option.value}
          isSelected={selectedValue === option.value}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
