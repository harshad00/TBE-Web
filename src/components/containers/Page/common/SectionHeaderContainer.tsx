import { FlexContainer, Text } from '@/components';
import { SectionHeaderProps } from '@/interfaces';

const SectionHeaderContainer = ({
  heading,
  focusText,
  headingLevel = 4,
  className = '',
}: SectionHeaderProps) => {
  return (
    <FlexContainer justifyCenter={false} className={`w-full ${className}`}>
      <Text
        level={`h${headingLevel}`}
        className={`heading-${headingLevel}`}
        textCenter={true}
      >
        {heading}
        <Text
          level='span'
          className={`heading-${headingLevel} text-primary`}
          textCenter={true}
        >
          &nbsp;{focusText}
        </Text>
      </Text>
    </FlexContainer>
  );
};

export default SectionHeaderContainer;
