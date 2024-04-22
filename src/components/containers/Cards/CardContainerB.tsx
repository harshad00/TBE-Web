import {
  CardSectionContainer,
  FlexContainer,
  PrimaryCardWithCTA,
  Section,
  SectionHeaderContainer,
} from '@/components';
import { routes } from '@/constant';
import { CardContainerBProps } from '@/interfaces';

const CardContainerB = ({
  heading,
  focusText,
  cards,
  borderColour,
  subtext,
}: CardContainerBProps) => {
  return (
    <Section id={routes.internals.landing.products}>
      <FlexContainer direction='col' className='gap-4'>
        <SectionHeaderContainer
          heading={heading}
          focusText={focusText}
          subtext={subtext}
        />
        <CardSectionContainer>
          {cards.map((program, key) => (
            <PrimaryCardWithCTA
              {...program}
              key={key}
              borderColour={borderColour}
            />
          ))}
        </CardSectionContainer>
      </FlexContainer>
    </Section>
  );
};

export default CardContainerB;
