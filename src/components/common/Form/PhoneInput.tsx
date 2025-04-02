import { useState } from 'react';
import { COUNTRY_CODES } from '@/constant';
import { CountryCodeType } from '@/interfaces';
import { formatPhoneNumber } from '@/utils';
import { Toast } from '@/components';

interface PhoneInputProps {
  onNumberChange: (fullNumber: string) => void;
}

const PhoneInput = ({ onNumberChange }: PhoneInputProps) => {
  const [countryCode, setCountryCode] = useState<CountryCodeType>('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      setError(''); // Clear error when valid input is entered
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

  const handleValidation = () => {
    if (!phoneNumber.trim()) {
      setError('Phone Number is required');
    } else if (phoneNumber.length < 10) {
      setError('Phone number must be 10 digits.');
    } else {
      setError(''); // Clear error if valid
    }
  };

  return (
    <div className='flex flex-col space-y-2'>
      <label className='text-gray-600'>Enter Phone Number:</label>
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
          onBlur={handleValidation} // Triggers validation when focus is lost
        />
      </div>

      {error && <Toast message={error} type='error' />}
    </div>
  );
};

export default PhoneInput;
