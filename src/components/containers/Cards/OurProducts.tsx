import {
  CardSectionContainer,
  FlexContainer,
  ProgramCard,
  Section,
  SectionHeaderContainer,
} from '@/components';
import { PRODUCTS, routes } from '@/constant';

const OurProducts = () => {
  return (
    <Section id={routes.internals.landing.products}>
      <FlexContainer direction='col'>
        <SectionHeaderContainer heading='Our' focusText='Products' />
        <CardSectionContainer>
          {PRODUCTS.map((program, key) => (
            <ProgramCard {...program} key={key} />
          ))}
        </CardSectionContainer>
      </FlexContainer>
    </Section>
  );
};

export default OurProducts;
