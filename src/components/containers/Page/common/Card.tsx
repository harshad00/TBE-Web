import { ReactNode } from 'react';

const Card = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md border border-gray-200 dark:border-zinc-700 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
