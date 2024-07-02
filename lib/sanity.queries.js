import { groq } from 'next-sanity';

export const projectsQuery = groq`*[_type == 'project']{
  _id,
  name,
  demo,
  slug,
  shorts,
  dateCreated,
  description,
  image,
  type,
  github,
  technology
}`;
