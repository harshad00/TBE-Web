import React from 'react';
import { CheckboxButtonProps } from '@/interfaces';

const CheckboxButton = ({
  label,
  value,
  isSelected,
  onClick,
}: CheckboxButtonProps) => {
  return (
    <label
      className={`flex items-center gap-2 px-3 py-1 font-semibold rounded transition-all duration-150 cursor-pointer shadow-md 
        ${
          isSelected ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'
        }
      `}
      htmlFor={`checkbox-${value}`}
    >
      <input
        type='checkbox'
        id={`checkbox-${value}`}
        value={value}
        checked={isSelected}
        onChange={onClick}
        className='hidden'
      />
      {label}
    </label>
  );
};

export default CheckboxButton;
