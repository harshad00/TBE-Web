import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import {
  OnboardingLayout,
  StepUsername,
  StepOccupation,
  StepUsage,
  StepPhoneNumber,
  OnboardingProgressBar,
  StepNavigation,
  Toast,
} from '@/components';
import { useApi, useUser } from '@/hooks';
import { routes } from '@/constant';

const steps = [StepUsername, StepOccupation, StepUsage, StepPhoneNumber];

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    username: '',
    occupation: '',
    usage: [] as string[],
    phone: '+91',
  });
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<
    boolean | null
  >(null);
  const [toast, setToast] = useState<{
    message: string;
    type?: 'success' | 'error' | 'info' | 'warning';
  } | null>(null);

  const { user } = useUser();
  const { makeRequest, loading: submitting } = useApi('onboarding');
  const { username, occupation, usage, phone } = formData;

  const router = useRouter();
  const redirectPath = useMemo(() => {
    return router.query.redirect ? String(router.query.redirect) : '/';
  }, [router.query.redirect]);

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

  const handleSubmit = async () => {
    if (!user?.id) return;

    try {
      const payload = {
        userName: formData.username,
        isOnboarded: true,
        profession: formData.occupation,
        purpose: formData.usage,
        contactNo: formData.phone,
      };

      await makeRequest({
        url: `${routes.api.onboard}?userId=${user.id}`,
        method: 'POST',
        body: payload,
      });

      setToast({
        message: 'Onboarding completed successfully!',
        type: 'success',
      });

      router.replace(redirectPath);
    } catch {
      setToast({
        message: 'Something went wrong. Please try again.',
        type: 'error',
      });
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return username.length > 2 && isUsernameAvailable === false;
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
            setIsAvailable={setIsUsernameAvailable}
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
    <>
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
          isSubmitting={submitting}
        />
      </OnboardingLayout>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default OnboardingPage;
