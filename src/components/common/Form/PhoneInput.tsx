import { useState } from 'react';
import { COUNTRY_CODES } from '@/constant';
import { CountryCodeType } from '@/interfaces';
import { formatPhoneNumber } from '@/utils';

interface PhoneInputProps {
  onNumberChange: (fullNumber: string) => void;
}

const PhoneInput = ({ onNumberChange }: PhoneInputProps) => {
  const [countryCode, setCountryCode] = useState<CountryCodeType>('+91');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      onNumberChange(formatPhoneNumber(countryCode, value));
    }
  };

  const handleCountryCodeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCode = event.target.value;
    setCountryCode(newCode);
    onNumberChange(formatPhoneNumber(newCode, phoneNumber));
  };

  return (
    <div className='flex flex-col space-y-2'>
      <div className='flex space-x-2'>
        <select
          className='border p-2 rounded'
          value={countryCode}
          onChange={handleCountryCodeChange}
        >
          {COUNTRY_CODES.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>

        <input
          type='text'
          className='border p-2 rounded w-full'
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder='Enter 10-digit number'
        />
      </div>
    </div>
  );
};

export default PhoneInput;
