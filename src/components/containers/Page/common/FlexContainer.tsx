import { FlexContainerProps } from '@/interfaces';

const FlexContainer = ({
  children,
  className = '',
  direction = 'row',
  itemCenter = true,
  justifyCenter = true,
}: FlexContainerProps) => {
  return (
    <div
      className={`flex flex-${direction} ${itemCenter && 'items-center'} ${
        justifyCenter && 'justify-center'
      } ${className} flex-wrap`}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
