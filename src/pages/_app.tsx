import { AppProps } from 'next/app';
import Script from 'next/script';
import { PageLayout } from '@/components';
import { googleAnalyticsScript, gtag } from '@/constant';
import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css';
import '@/styles/colors.css';

const TheBoringEducation = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <>
      <Script async src={gtag}></Script>
      <Script id='google-analytics'>{googleAnalyticsScript}</Script>
      <SessionProvider session={session}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </SessionProvider>
    </>
  );
};

export default TheBoringEducation;
