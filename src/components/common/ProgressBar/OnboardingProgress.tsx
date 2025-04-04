import React from 'react';
import { CheckCircleIcon, UserCircleIcon, BriefcaseIcon, AcademicCapIcon, PhoneIcon } from '@heroicons/react/24/outline';

type ProgressStep = {
  icon: React.ReactNode;
  label: string;
};

type OnboardingProgressProps = {
  steps: ProgressStep[];
  currentStep: number;
};

const defaultIcons = [
  <UserCircleIcon className="h-6 w-6" />,
  <BriefcaseIcon className="h-6 w-6" />, 
  <AcademicCapIcon className="h-6 w-6" />,
  <PhoneIcon className="h-6 w-6" />
];

const OnboardingProgress = ({ 
  steps, 
  currentStep 
}: OnboardingProgressProps) => {
  return (
    <div className="flex items-center justify-center py-6">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center
                border-2
                ${isCompleted 
                  ? 'bg-green-100 border-green-500' 
                  : isActive 
                    ? 'bg-blue-100 border-blue-500' 
                    : 'bg-gray-100 border-gray-300'
                }
                transition-colors duration-300
              `}>
                {isCompleted ? (
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                ) : (
                  React.cloneElement(step.icon || defaultIcons[index], {
                    className: `h-6 w-6 ${
                      isActive ? 'text-blue-600' : 'text-gray-500'
                    }`
                  })
                )}
              </div>
              <span className={`
                mt-2 text-sm font-medium
                ${isCompleted 
                  ? 'text-green-600' 
                  : isActive 
                    ? 'text-blue-600' 
                    : 'text-gray-500'
                }
              `}>
                {step.label}
              </span>
            </div>

            {!isLast && (
              <div className={`
                w-16 h-1 mx-2
                ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}
              `} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OnboardingProgress;