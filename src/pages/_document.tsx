import { googleAnalyticsScript, gtag } from '@/constant';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script async src={gtag}></script>
        <script>{googleAnalyticsScript}</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
