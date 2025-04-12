import { ReactNode } from 'react';
import { FlexContainer } from '@/components';

const CardHeader = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <FlexContainer
        className={`p-4 border-b border-gray-200 dark:border-zinc-700  ${className}`}
      >
        {children}
      </FlexContainer>
    </>
  );
};

export default CardHeader;
