import 'server-only';
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from './sanity.api';
import { projectsQuery } from './sanity.queries';

export const sanityClient = createClient({ projectId, dataset, apiVersion, useCdn });

export async function getProjects() {
  return await sanityClient?.fetch(projectsQuery);
}
