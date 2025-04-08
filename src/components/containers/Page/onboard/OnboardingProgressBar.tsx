import { motion } from 'framer-motion';
import { OnboardingProgressBarProps } from '@/interfaces';

const OnboardingProgressBar = ({
  currentStep,
  totalSteps,
}: OnboardingProgressBarProps) => {
  const progressPercent = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className='mb-6 pt-4'>
      <div className='h-2 w-full bg-gray-200 rounded-full overflow-hidden'>
        <motion.div
          className='h-full bg-primary rounded-full'
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>
      <div className='mt-2 text-sm text-muted-foreground text-right'>
        Step {currentStep + 1} of {totalSteps}
      </div>
    </div>
  );
};

export default OnboardingProgressBar;
