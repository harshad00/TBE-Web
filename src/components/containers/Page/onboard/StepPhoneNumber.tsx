import { COUNTRY_CODES } from '@/constant';
import { InputFieldContainer, SelectInput, FlexContainer } from '@/components';
import { StepPhoneNumberProps } from '@/interfaces';

const StepPhoneNumber = ({
  countryCode,
  phoneNumber,
  onChangeCode,
  onChangeNumber,
}: StepPhoneNumberProps) => {
  return (
    <FlexContainer direction='col' className='gap-4 w-full'>
      <FlexContainer direction='row' className='gap-2 w-full'>
        <SelectInput
          list={COUNTRY_CODES.map(
            (c) => `${c.code} ${c.country.toUpperCase()}`
          )}
          selectedItem={`${countryCode} ${COUNTRY_CODES.find(
            (c) => c.code === countryCode
          )?.country.toUpperCase()}`}
          onChange={(value) => {
            const code = value.split(' ')[0];
            onChangeCode(code);
          }}
        />

        <InputFieldContainer
          type='tel'
          value={phoneNumber || ''}
          onChange={onChangeNumber}
          placeholder='Enter your phone number'
        />
      </FlexContainer>
    </FlexContainer>
  );
};

export default StepPhoneNumber;
