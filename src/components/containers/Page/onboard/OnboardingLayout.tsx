import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { SectionHeaderContainer } from '@/components';
import { OnboardingLayoutProps } from '@/interfaces';

const OnboardingLayout = ({
  children,
  currentStep,
  totalSteps,
  onBack,
}: OnboardingLayoutProps) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8'
      >
        {currentStep > 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onBack}
            className='mb-6 flex items-center text-gray-600 hover:text-indigo-600 transition-colors'
          >
            <ArrowLeftIcon className='w-4 h-4 mr-2' />
            Back
          </motion.button>
        )}
        <SectionHeaderContainer
          heading='Welcome to'
          focusText='The Boring Education'
          headingLevel={4}
          subtext="Let's get to know you better"
        />
        {children}
      </motion.div>
    </div>
  );
};

export default OnboardingLayout;
