import { FlexContainer, Image, RadioInputField, Text } from '@/components';
import { STATIC_FILE_PATH } from '@/constant';
import { InputRadioContainerProps, RadioInputFieldProps } from '@/interfaces';

const InputRadioContainer = ({
  radioItems,
  onChange,
  selectedItemId,
  className,
}: InputRadioContainerProps) => {
  return (
    <FlexContainer direction='row' className={`gap-1 ${className}`}>
      {radioItems.map(({ id, label, description }) => {
        return (
          <RadioInputField
            key={id}
            id={id}
            label={label}
            description={description}
            onChange={onChange}
            selected={selectedItemId === id}
          />
        );
      })}
    </FlexContainer>
  );
};

export default InputRadioContainer;
