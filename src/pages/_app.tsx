import '@/styles/globals.css';
import '@/styles/colors.css';
import { AppProps } from 'next/app';
import { PageLayout } from '@/components';
import Script from 'next/script';
import { googleAnalyticsScript, gtag } from '@/constant';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const queryClient = new QueryClient();

const TheBoringEducation = ({
  Component,
  pageProps: { ...pageProps },
}: AppProps) => {
  return (
    <>
      <Script async src={gtag}></Script>
      <Script id='google-analytics'>{googleAnalyticsScript}</Script>
      <QueryClientProvider client={queryClient}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </QueryClientProvider>
    </>
  );
};

export default TheBoringEducation;
