import {
  CardSectionContainer,
  FlexContainer,
  Section,
  SectionHeaderContainer,
  PrimaryCard,
} from '@/components';
import { CardContainerAProps } from '@/interfaces';

const CardContainerA = ({
  heading,
  focusText,
  cards,
  borderColour,
}: CardContainerAProps) => {
  return (
    <Section>
      <FlexContainer direction='col'>
        <SectionHeaderContainer heading={heading} focusText={focusText} />
        <CardSectionContainer>
          {cards.map((item) => (
            <PrimaryCard key={item.id} {...item} borderColour={borderColour} />
          ))}
        </CardSectionContainer>
      </FlexContainer>
    </Section>
  );
};

export default CardContainerA;
