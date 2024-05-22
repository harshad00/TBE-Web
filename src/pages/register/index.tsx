import { FlexContainer, Text } from '@/components';
import LoginWithGoogleButton from '@/components/common/Buttons/LoginWithGoogleButton';
import Image from 'next/image';
import React from 'react';

function Register() {
  return (
    <FlexContainer className='h-screen'>
      <FlexContainer className='flex-col max-w-[351px] max-h-[527px]  border-[1px]  border-[#B0B0B0] rounded-[5px] p-[26px] mb-5'>
        <Text level='h1' className='text-[20px] font-bold'>
          Start Your Boring Journey
        </Text>
        <FlexContainer className='my-[84px]'>
          <Image
            src='/images/login_illustration.png'
            alt='login illustration'
            width={273}
            height={214}
            className='w-full'
          />
        </FlexContainer>
        <LoginWithGoogleButton />
      </FlexContainer>
    </FlexContainer>
  );
}

export default Register;
