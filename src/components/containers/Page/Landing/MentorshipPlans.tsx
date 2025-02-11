import { FlexContainer, MentorshipCard, Section, Text } from '@/components';
import { MENTORSHIP_CARDS } from '@/constant';
import React from 'react';

const MentorshipPlans = () => {
  return (
    <Section className='md:p-5 px-2 py-4'>
      <FlexContainer className='gap-2' direction='col'>
        <Text level='h3' className='heading-3'>
          Get Personalised Mentorship
        </Text>
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
