import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
  PortableText
} from '../../lib/sanity';
import { useRouter } from 'next/router';

const projectQuery = `*[_type == 'project' && slug.current == $slug][0] {
 _id,
  name,
  slug,
  demo,
  dateCreated,
  description,
  image,
  type,
  github,
  technology
}`;

export default function OneProject({ data, preview }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>loading ...</div>;
  }
  const { data: project } = usePreviewSubscription(projectQuery, {
    params: { slug: data.project?.slug.current },
    initialData: data,
    enabled: preview
  });

  console.log(project.name);
  return (
    <article>
      <h1>{project.project.name}</h1>
    </article>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == 'project' && defined(slug.current)]{
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

export async function getStaticProps({ params }) {
  const { slug } = params;
  const project = await sanityClient.fetch(projectQuery, { slug });
  return { props: { data: { project }, preview: true } };
}