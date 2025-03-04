import React from 'react';
import { RadioButtonProps } from '@/interfaces';

const RadioButton = ({
  label,
  value,
  isSelected,
  onClick,
}: RadioButtonProps) => {
  return (
    <div
      className={`px-4 py-1 font-bold rounded-lg transition-all duration-300 cursor-pointer ${
        isSelected ? 'bg-primary text-white' : 'bg-gray-200 hover:bg-gray-300'
      }`}
      onClick={onClick}
      data-value={value}
    >
      {label}
    </div>
  );
};

export default RadioButton;
