import {
  FlexContainer,
  MentorshipCard,
  Section,
  SectionHeaderContainer,
} from '@/components';
import { MENTORSHIP_CARDS } from '@/constant';

const MentorshipPlans = () => {
  return (
    <Section className='md:p-5 px-2 py-4'>
      <FlexContainer className='gap-4' direction='col'>
        <SectionHeaderContainer
          headingLevel={3}
          heading='Get Personalised'
          focusText='Mentorship'
        />
        <FlexContainer className='gap-2 h-full'>
          {MENTORSHIP_CARDS.map((plan) => (
            <MentorshipCard
              key={plan.heading}
              heading={plan.heading}
              description={plan.description}
              link={plan.link}
            />
          ))}
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default MentorshipPlans;
