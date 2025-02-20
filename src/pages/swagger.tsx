import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

// Dynamically import SwaggerUI to avoid SSR issues
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

const SwaggerPage = () => {
  const [swaggerSpec, setSwaggerSpec] = useState(null);

  useEffect(() => {
    // Fetch the generated Swagger JSON
    fetch('/api/docs')
      .then((res) => res.json())
      .then((data) => setSwaggerSpec(data));
  }, []);

  if (!swaggerSpec) return <p>Loading Swagger Docs...</p>;

  return <SwaggerUI spec={swaggerSpec} />;
};

export default SwaggerPage;
