import { COUNTRY_CODES } from '@/constant';
import {
  SelectInput,
  FlexContainer,
  InputFieldContainer,
  Text,
  Section,
} from '@/components';
import { StepPhoneNumberProps } from '@/interfaces';

const StepPhoneNumber = ({
  countryCode,
  phoneNumber,
  onChangeCode,
  onChangeNumber,
}: StepPhoneNumberProps) => {
  const codeList = COUNTRY_CODES.map((c) => c.code);

  return (
    <Section className='w-full'>
      <Text level='h4' className='heading-4 p-1 mb-2'>
        3. Your Contact No?
      </Text>

      <FlexContainer className='gap-2 w-full items-center flex-nowrap'>
        <SelectInput
          list={codeList}
          selectedItem={countryCode}
          onChange={onChangeCode}
          className=''
          aria-label='Country Code'
        />

        <InputFieldContainer
          label='Phone Number'
          type='tel'
          value={phoneNumber}
          onChange={onChangeNumber}
          className='w-full'
          labelClass='sr-only' // screen reader only
          isOptional={true}
        />
      </FlexContainer>
    </Section>
  );
};

export default StepPhoneNumber;
