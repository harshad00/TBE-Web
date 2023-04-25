import { FlexContainer } from '@/components';
import { CardSectionContainerProps } from '@/interfaces';

const CardSectionContainer = ({
  children,
  isWidthFull = true,
  className = '',
}: CardSectionContainerProps) => {
  return (
    <FlexContainer
      itemCenter={false}
      className={`${isWidthFull && 'w-full'} gap-4 pt-4 ${className}`}
    >
      {children}
    </FlexContainer>
  );
};

export default CardSectionContainer;
