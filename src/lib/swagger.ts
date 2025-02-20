import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: './src/pages/api/v1',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'The Boring Education API',
        version: '1.0.0',
        description: 'Auto-generated API documentation',
      },
    },
  });

  return spec;
};
