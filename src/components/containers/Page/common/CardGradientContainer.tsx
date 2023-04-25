import { CardGradientContainerProps } from '@/interfaces';

// To Put Border Color => border-borderColor${variant}
const CardGradientContainer = ({
  children,
  className = '',
  backgroundColor,
}: CardGradientContainerProps) => {
  return (
    <div className={`flex-auto rounded-2 border ${className}`}>
      <div className={`rounded-2 ${backgroundColor ?? 'bg-dark'} p-4`}>
        {children}
      </div>
    </div>
  );
};

export default CardGradientContainer;
