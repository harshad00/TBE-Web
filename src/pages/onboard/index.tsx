import { OnboardForm, SectionHeaderContainer } from '@/components';
import React from 'react';

function Onboard() {
  return (
    <div className=''>
      <SectionHeaderContainer
        heading=' WELCOME'
        focusText='ONBOARDING'
        headingLevel={4}
        subtext=''
        className='p-4'
      />
      <OnboardForm />
    </div>
  );
}

export default Onboard;
