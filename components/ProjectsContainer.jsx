import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const ProjectsContainer = ({ projects }) => {
  console.log(projects);
  return (
    <div className="px-5 pt-5">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="row g-3"
        data-masonry='{"percentPosition": true }'>
        {projects.slice(1, 7).map((project, i) => (
          <ProjectCard variants={item} item={project} i={i} key={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsContainer;
