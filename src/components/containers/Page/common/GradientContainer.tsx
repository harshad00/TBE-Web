import { GradientContainerProps } from '@/interfaces';

// To Put Border Color => border-borderColor${variant}
const GradientContainer = ({
  children,
  className = '',
  backgroundColor,
}: GradientContainerProps) => {
  return (
    <div
      className={`flex-auto rounded-2 border ${className} ${
        backgroundColor ?? 'bg-white'
      }`}
    >
      <div className='rounded-2 p-3'>{children}</div>
    </div>
  );
};

export default GradientContainer;
