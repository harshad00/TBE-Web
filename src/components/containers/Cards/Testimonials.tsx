import {
  CardSectionContainer,
  FlexContainer,
  Section,
  SectionHeaderContainer,
  TestimonialCard,
} from '@/components';
import { TESTIMONIALS } from '@/constant';

const Testimonials = () => {
  return (
    <Section>
      <FlexContainer direction='col' className='gap-2'>
        <SectionHeaderContainer
          heading='Hear the words of'
          focusText='ex-learners'
        />
        <CardSectionContainer gap='gap-2'>
          {TESTIMONIALS.map((item) => {
            return <TestimonialCard {...item} key={item.id} />;
          })}
        </CardSectionContainer>
      </FlexContainer>
    </Section>
  );
};

export default Testimonials;
