import { useState, useEffect } from 'react';
import {
  OnboardingLayout,
  StepUsername,
  StepOccupation,
  StepUsage,
  StepPhoneNumber,
  OnboardingProgressBar,
  StepNavigation,
} from '@/components';

const steps = [StepUsername, StepOccupation, StepUsage, StepPhoneNumber];

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    username: '',
    occupation: '',
    usage: [] as string[],
    phone: '+91',
  });

  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  const { username, occupation, usage, phone } = formData;

  useEffect(() => {
    if (currentStep === 0 && username.length > 2) {
      setIsChecking(true);
      const timer = setTimeout(() => {
        setIsAvailable(username.toLowerCase() !== 'taken'); // fake check
        setIsChecking(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [username, currentStep]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Submitted Data:', formData);
    alert('Onboarding Complete! Check console for data.');
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return username.length > 2 && isAvailable;
      case 1:
        return occupation !== '';
      case 2:
        return usage.length > 0;
      case 3: {
        const [code, number] = phone.split(' ');
        return (
          code.startsWith('+') && number?.replace(/[^0-9]/g, '').length >= 10
        );
      }
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <StepUsername
            username={username}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, username: value }))
            }
            isChecking={isChecking}
            isAvailable={isAvailable}
          />
        );
      case 1:
        return (
          <StepOccupation
            value={occupation}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, occupation: value }))
            }
          />
        );
      case 2:
        return (
          <StepUsage
            selected={usage}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, usage: value }))
            }
          />
        );
      case 3:
        return (
          <StepPhoneNumber
            countryCode={phone.split(' ')[0]}
            phoneNumber={phone.split(' ')[1] || ''}
            onChangeCode={(code) =>
              setFormData((prev) => ({
                ...prev,
                phone: `${code} ${prev.phone.split(' ')[1] || ''}`,
              }))
            }
            onChangeNumber={(number) =>
              setFormData((prev) => ({
                ...prev,
                phone: `${prev.phone.split(' ')[0]} ${number}`,
              }))
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <OnboardingLayout
      currentStep={currentStep}
      totalSteps={steps.length}
      onBack={handleBack}
    >
      <OnboardingProgressBar
        currentStep={currentStep}
        totalSteps={steps.length}
      />
      {renderStep()}
      <StepNavigation
        currentStep={currentStep}
        isValid={isStepValid()}
        isLastStep={currentStep === steps.length - 1}
        onNext={handleNext}
        onSubmit={handleSubmit}
      />
    </OnboardingLayout>
  );
};

export default OnboardingPage;
