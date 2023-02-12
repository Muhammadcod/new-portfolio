import ProjectsContainer from '../components/ProjectsContainer';
import { sanityClient } from '../lib/sanity';
import Script from 'next/script';
import Layout from '../components/Layout';

const projectsQuery = `*[_type == 'project']{
  _id,
  name,
  demo,
  slug,
  dateCreated,
  description,
  image,
  type,
  github,
  technology
}`;

export default function Index({ projects }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`script loaded correctly, masonry has been populated`)}
      />
      <Layout>
        <ProjectsContainer projects={projects} />
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
