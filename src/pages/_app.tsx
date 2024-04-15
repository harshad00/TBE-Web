import { AppProps } from 'next/app';
import { PageLayout } from '@/components';
import Script from 'next/script';
import { googleAnalyticsScript, gtag } from '@/constant';
import '@/styles/globals.css';
import '@/styles/colors.css';

const TheBoringEducation = ({
  Component,
  pageProps: { ...pageProps },
}: AppProps) => {
  return (
    <>
      <Script async src={gtag}></Script>
      <Script id='google-analytics'>{googleAnalyticsScript}</Script>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
};

export default TheBoringEducation;
