import { Navbar } from '@/components';
import { PageLayoutProps } from '@/interfaces';

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className='gradient-bg'>
      <Navbar />
      {children}
    </main>
  );
};

export default PageLayout;
