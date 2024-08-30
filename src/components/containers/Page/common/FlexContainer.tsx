import { FlexContainerProps } from '@/interfaces';

const FlexContainer = ({
  children,
  className = '',
  direction = 'row',
  itemCenter = true,
  justifyCenter = true,
  wrap = true,
  fullWidth = false,
  id = '',
  disabled = false,
}: FlexContainerProps) => {
  return (
    <div
      id={id}
      className={`flex flex-${direction} ${itemCenter && 'items-center'} ${
        justifyCenter && 'justify-center'
      } ${className} ${wrap && 'flex-wrap'} ${fullWidth && 'w-full'} ${
        disabled ? 'pointer-events-none opacity-40' : ''
      }`}
      aria-disabled={disabled} // For accessibility
    >
      {children}
    </div>
  );
};

export default FlexContainer;
