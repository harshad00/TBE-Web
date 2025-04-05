import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Button, Toast, OnboardingProgress } from '@/components';

import UsernameStep from './steps/UsernameStep';
import RoleStep from './steps/RoleStep';
import UsageStep from './steps/UsageStep';
import ContactStep from './steps/ContactStep';
import {
  ONBOARDFORM_STEPS,
  USER_ROLEOPTIONS,
  USER_OPTIONS,
  routes,
} from '@/constant';
import {
  handleOnboardFormQuestionChange,
  validateInOnboardingCurrentStep,
  handleOnboardFormNextQusetion,
  handleOnboardFormBackQusetion,
} from '@/utils';
import { OnboardFormProps, FormStep } from '@/interfaces';
import useApi from '@/hooks/useApi';

const OnboardForm = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.user?.id;

  // 👇 NEW: Get redirectPath from query
  const redirectPath = router.query.redirect
    ? String(router.query.redirect)
    : '/';

  const [currentStep, setCurrentStep] = useState<FormStep>('username');
  const [formData, setFormData] = useState<OnboardFormProps>({
    username: '',
    selectedRole: '',
    selectedOptions: [],
    phoneNumber: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const steps = ONBOARDFORM_STEPS;
  const { response, error, loading, makeRequest } = useApi('onboard-user');

  const handleChange = (
    field: keyof OnboardFormProps,
    value: string | string[]
  ) => {
    handleOnboardFormQuestionChange(field, value, setFormData);
  };

  const handleNext = () => {
    handleOnboardFormNextQusetion(
      currentStep,
      steps,
      setCurrentStep,
      formData,
      setErrors
    );
  };

  const handleBack = () => {
    handleOnboardFormBackQusetion(currentStep, steps, setCurrentStep);
  };

  const handleSubmit = async () => {
    if (!userId) {
      setToastMessage('User ID not found. Please log in.');
      setToastType('error');
      setTimeout(() => router.replace('/login?redirect=/onboard'), 1500);
      return;
    }

    if (validateInOnboardingCurrentStep(currentStep, formData, setErrors)) {
      try {
        const payload = {
          userName: formData.username,
          isOnboarded: true,
          profession: formData.selectedRole,
          purpose: formData.selectedOptions,
          contactNo: formData.phoneNumber,
        };

        const res = await makeRequest({
          url: `${routes.api.onbording}?userId=${userId}`,
          method: 'POST',
          body: payload,
        });

        if (res?.status) {
          setToastMessage('User onboarded successfully!');
          setToastType('success');
          setTimeout(() => router.replace(redirectPath), 1500); // ✅ Use redirectPath
        } else {
          setToastMessage(`${res.message}`);
          setToastType('error');
        }
      } catch (err: any) {
        console.error('Onboarding error:', err);
        const errorMsg =
          err.message || 'Something went wrong during onboarding.';
        setToastMessage(errorMsg);
        setToastType('error');

        if (
          errorMsg.toLowerCase().includes('unauthorized') ||
          errorMsg.toLowerCase().includes('403')
        ) {
          setTimeout(() => router.replace('/login?redirect=/onboard'), 1500);
        }
      }
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'username':
        return (
          <UsernameStep
            username={formData.username}
            error={errors.username}
            onChange={(value) => handleChange('username', value)}
          />
        );
      case 'role':
        return (
          <RoleStep
            selectedRole={formData.selectedRole}
            error={errors.selectedRole}
            onChange={(value) => handleChange('selectedRole', value)}
            options={USER_ROLEOPTIONS}
          />
        );
      case 'usage':
        return (
          <UsageStep
            selectedOptions={formData.selectedOptions}
            error={errors.selectedOptions}
            onChange={(value) => handleChange('selectedOptions', value)}
            options={USER_OPTIONS}
          />
        );
      case 'contact':
        return (
          <ContactStep
            phoneNumber={formData.phoneNumber}
            error={errors.phoneNumber}
            onChange={(value) => handleChange('phoneNumber', value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className='w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      <OnboardingProgress
        steps={steps}
        currentStep={steps.findIndex(
          (s) => s.label.toLowerCase() === currentStep
        )}
      />

      <div className='mt-8'>{renderStepContent()}</div>

      <div className='flex justify-between mt-8'>
        {currentStep !== 'username' && (
          <Button
            variant='SECONDARY'
            text='Back'
            onClick={handleBack}
            className='px-6 py-2'
          />
        )}
        {currentStep === 'contact' ? (
          <Button
            variant='PRIMARY'
            text={loading ? 'Submitting...' : 'Submit'}
            onClick={handleSubmit}
            className='px-6 py-2'
            disabled={loading}
          />
        ) : (
          <Button
            variant='PRIMARY'
            text='Next'
            onClick={handleNext}
            className='px-6 py-2'
          />
        )}
      </div>

      {toastMessage && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
};

export default OnboardForm;
