import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';
import { LinkButton, Section } from '@/components';
import swaggerSpec from '../../docs/swagger-base.json';
import { LINKS } from '@/constant';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

const SwaggerPage = () => {
  return (
    <Section>
      <SwaggerUI spec={swaggerSpec} />
      <LinkButton
        target='_blank'
        href={LINKS.postmanDocs}
        buttonProps={{
          variant: 'SECONDARY',
          text: 'Read Postman Documentation',
        }}
      />
    </Section>
  );
};

export default SwaggerPage;
