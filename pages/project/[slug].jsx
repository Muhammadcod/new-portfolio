import {lazy} from 'react';
import {groq} from 'next-sanity';
import {sanityClient} from '../../lib/sanity';
import {PreviewSuspense} from 'next-sanity/preview';
import DynamicComponent from '../../components/DynamicComponent';
import Layout from '../../components/Layout';

const PreviewProject = lazy(() => import('../../components/PreviewProject'));

const projectQuery = groq`*[_type == 'project' && slug.current == $slug][0] {
 _id,
  name,
  slug,
  demo,
  dateCreated,
  description,
  image,
  type,
  github,
  technology,
  story
}`;

export default function OnePage({data, preview}) {
  const {project} = data ?? {};

  return preview ? (
    <PreviewSuspense fallback="Loading...">
      <PreviewProject query={projectQuery} queryParams={data.queryParams}/>
    </PreviewSuspense>
  ) : (
    <Layout>
      <DynamicComponent project={project}/>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    groq`*[_type == 'project' && defined(slug.current)]{
      'params': {
      'slug': slug.current
      }
      }`
  );
  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({params, preview = false}) {
  const queryParams = {slug: params?.slug ?? null};

  if (preview) {
    return {props: {preview, data: {queryParams}}};
  }
  const project = await sanityClient.fetch(projectQuery, queryParams);

  return {props: {data: {project}, preview, queryParams: {}}};
}
