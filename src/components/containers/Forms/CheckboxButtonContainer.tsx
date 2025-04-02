import { FlexContainer, CheckboxButton } from '@/components';
import { CheckboxGroupProps } from '@/interfaces';

const CheckboxButtonContainer = ({
  options,
  selectedValues,
  onChange,
}: CheckboxGroupProps) => {
  const handleClick = (value: string) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value) // Remove if already selected
      : [...selectedValues, value]; // Add if not selected

    onChange(updatedValues);
  };

  return (
    <FlexContainer className='gap-2'>
      {options.map((option, index) => (
        <CheckboxButton
          key={index}
          label={option.label}
          value={option.value}
          isSelected={selectedValues.includes(option.value)}
          onClick={() => handleClick(option.value)}
        />
      ))}
    </FlexContainer>
  );
};

export default CheckboxButtonContainer;
