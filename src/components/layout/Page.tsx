import { Footer, Navbar } from '@/components';
import { PageLayoutProps } from '@/interfaces';

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className='gradient-bg'>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;
