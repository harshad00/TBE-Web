import React from 'react';
import { CertificateContentProps } from '@/interfaces';

const CertificateContent = ({
  type,
  username,
  courseName,
  date,
}: CertificateContentProps) => {
  const backgroundImagePaths: Record<string, string> = {
    webinar: 'url(/images/webinar_certificate.png)',
    shiksha: 'url(/images/shiksha_certificate.png)',
  };

  const userNameStyles: React.CSSProperties = {
    top: '51.5%',
    left: '50%',
    transform:
      type === 'shiksha' ? 'translate(-50%, -110%)' : 'translate(-50%,-125%)',
    fontSize: '1.2em',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'capitalize',
    opacity: '0.8',
  };

  const courseNameStyles: React.CSSProperties = {
    top: '59%',
    left: '50%',
    transform:
      type === 'shiksha' ? 'translate(-50%,-110%)' : 'translate(-50%,-150%)',
    fontSize: '0.7em',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    opacity: '0.9',
  };

  const dateStyles: React.CSSProperties = {
    top: '67%',
    left: '50%',
    transform:
      type === 'shiksha' ? 'translate(-50%,-110%)' : 'translate(-50%,-150%)',
    fontSize: '0.7em',
    fontWeight: 500,
    opacity: '0.85',
  };

  return (
    <div
      className='certificate-container relative text-center bg-white'
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: 'auto',
        aspectRatio: '3/2',
        backgroundImage: backgroundImagePaths[type],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div className='absolute' style={userNameStyles}>
        {username}
      </div>
      <div className='absolute' style={courseNameStyles}>
        {courseName}
      </div>
      <div className='absolute' style={dateStyles}>
        {date}
      </div>
    </div>
  );
};

export default CertificateContent;
