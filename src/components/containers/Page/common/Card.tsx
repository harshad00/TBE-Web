import { ReactNode } from 'react';
import { FlexContainer } from '@/components';

const Card = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <FlexContainer
        direction='col'
        justifyCenter={false}
        itemCenter={false}
        className={`bg-white rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 ${className}`}
      >
        {children}
      </FlexContainer>
    </>
  );
};

export default Card;
