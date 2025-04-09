import { COUNTRY_CODES } from '@/constant';
import { SelectInput, FlexContainer } from '@/components';
import { StepPhoneNumberProps } from '@/interfaces';

const StepPhoneNumber = ({
  countryCode,
  phoneNumber,
  onChangeCode,
  onChangeNumber,
}: StepPhoneNumberProps) => {
  const selectedCode = `${countryCode}`;
  const codeList = COUNTRY_CODES.map((c) => c.code);

  return (
    <FlexContainer className='gap-2 w-full items-center flex-nowrap'>
      <SelectInput
        list={codeList}
        selectedItem={selectedCode}
        onChange={onChangeCode}
        className='w-32'
      />

      <input
        type='tel'
        value={phoneNumber || ''}
        onChange={(e) => onChangeNumber(e.target.value)}
        placeholder='Enter your phone number'
        className='w-full px-3 py-1 strong-text border border-grey rounded focus:outline-none focus:border-none focus:ring focus:ring-grey'
      />
    </FlexContainer>
  );
};

export default StepPhoneNumber;
