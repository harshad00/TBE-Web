import React from 'react';
import { CertificateContentProps } from '@/interfaces';

const CertificateContent = ({
  username,
  courseName,
  date,
}: CertificateContentProps) => {
  return (
    <div
      className='certificate-container relative text-center bg-white'
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: 'auto',
        aspectRatio: '3/2',
        backgroundImage: 'url(/images/Certificate_tbe.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div
        className='absolute'
        style={{
          top: '51.5%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '1.2em',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textTransform: 'capitalize',
          opacity: '0.8',
        }}
      >
        {username}
      </div>
      <div
        className='absolute'
        style={{
          top: '59%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.7em',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          opacity: '0.9',
        }}
      >
        {courseName}
      </div>
      <div
        className='absolute'
        style={{
          top: '67%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.7em',
          fontWeight: 500,
          opacity: '0.85',
        }}
      >
        {date}
      </div>
    </div>
  );
};

export default CertificateContent;
