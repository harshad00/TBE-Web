import { ReactNode } from 'react';

const CardTitle = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>;
};

export default CardTitle;
