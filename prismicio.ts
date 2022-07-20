import * as prismic from '@prismicio/client';

import { enableAutoPreviews } from '@prismicio/next';
import sm from './sm.json';

export interface PrismicConfig {
  req?: prismic.HttpRequestLike;
}

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/';
    case 'page':
      return `/${doc.uid}`;
    default:
      return null;
  }
}

// This factory function allows smooth preview setup
export function createClient(config: PrismicConfig) {
  const client = prismic.createClient(process.env.PRISMIC_API_ENDPOINT);

  enableAutoPreviews({
    client,
    req: config.req,
  });

  return client;
}
