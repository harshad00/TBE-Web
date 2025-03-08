import React from 'react';
import { RadioButtonProps } from '@/interfaces';

const RadioButton = ({
  label,
  value,
  isSelected,
  onClick,
}: RadioButtonProps) => {
  return (
    <label
      className={`px-4 py-1 font-bold rounded transition-all duration-100 cursor-pointer shadow-md ${
        isSelected ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'
      }`}
      onClick={onClick}
      data-value={value}
    >
      {label}
    </label>
  );
};

export default RadioButton;
