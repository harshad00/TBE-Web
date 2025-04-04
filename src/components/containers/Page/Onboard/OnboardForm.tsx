import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Text,
  CheckboxButtonContainer,
  RadioButtonContainer,
  PhoneInput,
  Button,
  Toast,
} from '@/components';
import { OnboardingProgress } from '@/components';
import {
  UserCircleIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const USER_OPTIONS = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const USER_ROLEOPTIONS = [
  { value: 'role1', label: 'Role 1' },
  { value: 'role2', label: 'Role 2' },
  { value: 'role3', label: 'Role 3' },
];

type FormStep = 'username' | 'role' | 'usage' | 'contact';

interface FormData {
  username: string;
  selectedRole: string;
  selectedOptions: string[];
  phoneNumber: string;
  countryCode: string;
}

const OnboardForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<FormStep>('username');
  const [formData, setFormData] = useState<FormData>({
    username: '',
    selectedRole: '',
    selectedOptions: [],
    phoneNumber: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const steps = [
    { icon: <UserCircleIcon className="h-6 w-6" />, label: 'Username' },
    { icon: <BriefcaseIcon className="h-6 w-6" />, label: 'Role' },
    { icon: <AcademicCapIcon className="h-6 w-6" />, label: 'Usage' },
    { icon: <PhoneIcon className="h-6 w-6" />, label: 'Contact' },
  ];

  const handleChange = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateCurrentStep = () => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 'username' && !formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (currentStep === 'role' && !formData.selectedRole) {
      newErrors.selectedRole = 'Please select a role';
    }
    if (currentStep === 'usage' && formData.selectedOptions.length === 0) {
      newErrors.selectedOptions = 'Please select at least one option';
    }
    if (currentStep === 'contact' && !formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      const currentIndex = steps.findIndex(
        (s) => s.label.toLowerCase() === currentStep
      );
      if (currentIndex < steps.length - 1) {
        setCurrentStep(steps[currentIndex + 1].label.toLowerCase() as FormStep);
      }
    }
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex(
      (s) => s.label.toLowerCase() === currentStep
    );
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].label.toLowerCase() as FormStep);
    }
  };

  const handleSubmit = () => {
    if (validateCurrentStep()) {
      setToastMessage('Form submitted successfully!');
      console.log(formData);
      
      // setTimeout(() => router.push('/dashboard'), 1500);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'username':
        return (
          <div className="space-y-4">
            <label className="block font-medium">
              Choose Your Username
              <Text level="span" className="text-primary"> (Required)</Text>
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => handleChange('username', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your username"
            />
            {errors.username && (
              <Text level="p" variant="ERROR" className="text-red-500">
                {errors.username}
              </Text>
            )}
          </div>
        );
      case 'role':
        return (
          <div className="space-y-4">
            <label className="block font-medium">
              What Do You Do?
              <Text level="span" className="text-primary"> (Required)</Text>
            </label>
            <RadioButtonContainer
              options={USER_ROLEOPTIONS}
              selectedValue={formData.selectedRole}
              onChange={(value) => handleChange('selectedRole', value)}
            />
            {errors.selectedRole && (
              <Text level="p" variant="ERROR" className="text-red-500">
                {errors.selectedRole}
              </Text>
            )}
          </div>
        );
      case 'usage':
        return (
          <div className="space-y-4">
            <label className="block font-medium">
              How Would You Use The Platform?
              <Text level="span" className="text-primary"> (Required)</Text>
            </label>
            <CheckboxButtonContainer
              options={USER_OPTIONS}
              selectedValues={formData.selectedOptions}
              onChange={(value) => handleChange('selectedOptions', value)}
            />
            {errors.selectedOptions && (
              <Text level="p" variant="ERROR" className="text-red-500">
                {errors.selectedOptions}
              </Text>
            )}
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Hello</h1>
            <label className="block font-medium">
              Enter Your Phone Number
              <Text level="span" className="text-primary"> (Required)</Text>
            </label>
            <PhoneInput
              onNumberChange={(value) => handleChange('phoneNumber', value)}
            />
            {errors.phoneNumber && (
              <Text level="p" variant="ERROR" className="text-red-500">
                {errors.phoneNumber}
              </Text>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <OnboardingProgress
        steps={steps}
        currentStep={steps.findIndex(
          (s) => s.label.toLowerCase() === currentStep
        )}
      />

      <div className="mt-8">{renderStepContent()}</div>

      <div className="flex justify-between mt-8">
        {currentStep !== 'username' && (
          <Button
            variant="SECONDARY"
            text="Back"
            onClick={handleBack}
            className="px-6 py-2"
          />
        )}

        {currentStep === 'contact' ? (
          <Button
            variant="PRIMARY"
            text="Submit"
            onClick={handleSubmit}
            className="px-6 py-2"
          />
        ) : (
          <Button
            variant="PRIMARY"
            text="Next"
            onClick={handleNext}
            className="px-6 py-2"
          />
        )}
      </div>

      {toastMessage && (
        <Toast
          message={toastMessage}
          type={Object.keys(errors).length > 0 ? 'error' : 'success'}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
};

export default OnboardForm;
