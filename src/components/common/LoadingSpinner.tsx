import React from 'react';
import { LoadingSpinnerProps } from '@/interfaces';

const LoadingSpinner = ({
  className,
  height = 12,
  width = 12,
  marginClass = 'ml-1',
}: LoadingSpinnerProps) => {
  let additionalClasses = '';
  if (height) additionalClasses += `h-${height} `;
  if (width) additionalClasses += `w-${width} `;
  if (marginClass) additionalClasses += marginClass;
  if (className) additionalClasses += className;

  return (
    <div className='flex items-center justify-center h-screen'>
      <div
        className={`inline-block ${additionalClasses} ${marginClass} animate-spin rounded-full border-2 border-solid border-black border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
