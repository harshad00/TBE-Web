import { Alert, Footer, Navbar } from '@/components';
import { PageLayoutProps } from '@/interfaces';

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className='bg-lightBG'>
      <Alert text='Page in Development. Releasing in V1.3.3' />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;
