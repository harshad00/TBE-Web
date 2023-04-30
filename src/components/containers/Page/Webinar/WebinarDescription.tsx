import { FlexContainer, Text } from '@/components';
import { FlexContainerProps } from '@/interfaces';

interface WebinarDescriptionProps {
  paragraphs: string[];
  flexProps: FlexContainerProps;
}

const WebinarDescription = ({
  paragraphs,
  flexProps,
}: WebinarDescriptionProps) => {
  return (
    <FlexContainer {...flexProps}>
      {paragraphs.map((paragraph, key) => (
        <Text
          level='p'
          className='paragraph [&:not(:first-child)]:mt-3'
          key={key}
        >
          {paragraph}
        </Text>
      ))}
    </FlexContainer>
  );
};

export default WebinarDescription;
