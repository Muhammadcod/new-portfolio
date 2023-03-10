import ProjectsContainer from '../components/ProjectsContainer';
import { sanityClient } from '../lib/sanity';
import Script from 'next/script';
import Layout from '../components/Layout';
import { selectItem } from '../utils';

const projectsQuery = `*[_type == 'project']{
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

const keys = [
  'Would You Rather',
  'Fiqpay Payment Wizard',
  'Admin Dashboard',
  'Image Gallery',
  'Openess Emoji',
  'My Reads App'
];

export default function Index({ projects }) {
  const filteredProject = selectItem(projects, keys);
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`script loaded correctly, masonry has been populated`)}
      />
      <Layout>
        <ProjectsContainer projects={filteredProject} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const projects = await sanityClient.fetch(projectsQuery);
  return {
    props: {
      projects
    }
  };
}
