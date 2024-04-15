import {
  CardSectionContainer,
  FlexContainer,
  ProgramCard,
  Section,
  SectionHeaderContainer,
} from '@/components';
import { PROGRAMS, routes } from '@/constant';

const OurProducts = () => {
  return (
    <Section id={routes.internals.landing.programs}>
      <FlexContainer direction='col'>
        <SectionHeaderContainer heading='Our' focusText='Products' />
        <CardSectionContainer>
          {PROGRAMS.map((program, key) => (
            <ProgramCard {...program} key={key} />
          ))}
        </CardSectionContainer>
      </FlexContainer>
    </Section>
  );
};

export default OurProducts;
