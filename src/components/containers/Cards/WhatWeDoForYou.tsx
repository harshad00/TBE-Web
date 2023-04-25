import {
  CardSectionContainer,
  FlexContainer,
  Section,
  SectionHeaderContainer,
  WhatWeDoForYouCard,
} from '@/components';
import { WHAT_WE_DO_FOR_YOU_MICROCAMP } from '@/constant';

const WhatWeDoForYou = () => {
  return (
    <Section>
      <FlexContainer direction='col' itemCenter={true} justifyCenter={true}>
        <SectionHeaderContainer
          heading='What we do for you'
          focusText=''
          headingLevel={3}
        />
        <CardSectionContainer>
          {WHAT_WE_DO_FOR_YOU_MICROCAMP.map((item) => {
            const { id } = item;
            return <WhatWeDoForYouCard key={id} {...item} />;
          })}
        </CardSectionContainer>
      </FlexContainer>
    </Section>
  );
};

export default WhatWeDoForYou;
