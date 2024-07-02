import { useRef } from 'react';
import Script from 'next/script';
import { useInView } from 'framer-motion';
import { sanityClient } from '../../lib/sanity';
import { selectItem } from '../../utils';
import ProjectsContainer from '../../components/ProjectsContainer';
import Layout from '../../components/Layout';
import AboutMe from '../../components/AboutMe';
import TechStack from '../../components/TechStack';

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

export default function Indexgdgdgh({ projects }) {
  const filteredProject = selectItem(projects, keys);
  const ref = useRef(null);
  const stackRef = useRef(null);
  const isInView = useInView(ref || stackRef);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`script loaded correctly, masonry has been populated`)}
      />
      <Layout animateLayout={isInView}>
        <ProjectsContainer projects={filteredProject} />
        <section ref={ref}>
          <AboutMe />
          <TechStack />
        </section>
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
