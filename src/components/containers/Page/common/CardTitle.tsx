import { ReactNode } from 'react';
import { Text } from '@/components';

const CardTitle = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <Text level='h2' className={`text-xl font-semibold ${className}`}>
        {' '}
        {children}{' '}
      </Text>
    </>
  );
};

export default CardTitle;
