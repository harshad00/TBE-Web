import { Button } from '@/components';
import { StepNavigationProps } from '@/interfaces';

const StepNavigation = ({
  currentStep,
  isValid,
  isLastStep,
  onNext,
  onSubmit,
}: StepNavigationProps) => (
  <div className='mt-8'>
    <Button
      text={isLastStep ? 'Complete Onboarding' : 'Next'}
      variant='PRIMARY'
      active={isValid}
      onClick={isLastStep ? onSubmit : onNext}
      className='m-auto'
    />
  </div>
);

export default StepNavigation;
