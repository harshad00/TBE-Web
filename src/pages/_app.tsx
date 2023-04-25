import { AppProps } from 'next/app';
import { PageLayout } from '@/components';
import '@/styles/globals.css';
import '@/styles/colors.css';

const TheBoringEducation = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
};

export default TheBoringEducation;
