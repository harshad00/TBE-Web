import React from 'react';

const Section = ({ children }: { children: React.ReactNode }) => {
  return <section className='px-8 py-12'>{children}</section>;
};

export default Section;
