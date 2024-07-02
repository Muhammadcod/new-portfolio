import { getProjects } from '../../lib/sanity.client';
import ProjectsContainer from '../../components/ProjectsContainer';

export default async function Projects() {
  const projects = await getProjects();
  return <ProjectsContainer projects={projects} />;
}
