import '@/styles/globals.css';
import '@/styles/colors.css';
import { AppProps } from 'next/app';
import { PageLayout } from '@/components';
import Script from 'next/script';
import { googleAnalyticsScript, gtag } from '@/constant';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SessionProvider } from 'next-auth/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Create a client
const queryClient = new QueryClient();

const TheBoringEducation = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <>
      <Script async strategy='afterInteractive' src={gtag}></Script>
      <Script id='google-analytics'>{googleAnalyticsScript}</Script>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </QueryClientProvider>
      </SessionProvider>
      <SpeedInsights />
    </>
  );
};

export default TheBoringEducation;
