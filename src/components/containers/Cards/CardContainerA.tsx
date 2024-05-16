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
  subtext,
}: CardContainerAProps) => {
  return (
    <Section>
      <FlexContainer direction='col' className='gap-4'>
        <SectionHeaderContainer
          heading={heading}
          focusText={focusText}
          subtext={subtext}
        />
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
