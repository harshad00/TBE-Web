import { FlexContainer, Text } from '@/components';
import { mentorshipPlans } from '@/constant';
import React from 'react';
import Mentorship from '../../Cards/Mentorship';

const MentorshipPlans = () => {
  return (
    <FlexContainer className='p-5'>
      <Text level='h1' className='heading-3'>
        Mentorship Plans
      </Text>
      <FlexContainer className='gap-2 m-2'>
        {mentorshipPlans.map((plan) => (
          <Mentorship
            key={plan.title}
            heading={plan.title}
            description={plan.description}
            link={plan.link}
          />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
};

export default MentorshipPlans;
