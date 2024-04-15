import { GetSEOMetaResponseType } from '@/interfaces';
import { routes } from '../routes';
import { products } from '..';

const commonMeta = {
  type: 'website',
  robots: 'follow, index',
  image: 'https://theboringeducation.com/images/large-og.png',
};

const getSEOMeta = (basePath: any): GetSEOMetaResponseType => {
  const meta = {
    '/': {
      title: 'The Boring Education',
      siteName: 'The Boring Education',
      description: 'Tech Education for Everyone',
      url: routes.home,
      ...commonMeta,
    },
    [products.roadmaps.slug]: {
      title: `${products.roadmaps.label} | The Boring Education`,
      siteName: products.roadmaps.label,
      description: products.roadmaps.description,
      url: products.roadmaps.slug,
      ...commonMeta,
    },
    [products.projects.slug]: {
      title: `${products.projects.label} | The Boring Education`,
      siteName: products.projects.label,
      description: products.projects.description,
      url: products.projects.slug,
      ...commonMeta,
    },
    '/contact': {
      title: 'Contact | The Boring Education',
      siteName: 'The Boring Education',
      description: 'Contact The Boring Education',
      url: routes.contactUs,
      ...commonMeta,
    },
    '/404': {
      title: 'Lost in Boring Space | The Boring Education',
      siteName: 'Lost in Boring Space',
      description: 'Tech Education for Everyone',
      url: routes[404],
      ...commonMeta,
    },
  };

  return meta[basePath];
};

export { getSEOMeta };
