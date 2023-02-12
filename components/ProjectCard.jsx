import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({ variants, item }) => {
  return (
    <>
      <motion.div variants={variants} className="col-sm-12 col-md-4">
        <div className="border p-3">
          <div className="d-flex justify-content-between align-items-start">
            <h4>Would You Rather</h4>
            <Link href={`/project/${item.slug.current}`} className="gr-heading-color">
              <span>IC</span>
            </Link>
          </div>
          <div className="d-flex flex-wrap mt-3">
            <div className="pr-2">Next</div>
            <div className="px-2">GraphQl</div>
            <div className="px-2">Redux</div>
            <div className="px-2">ChatGPT</div>
          </div>

          <div className="">
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique.
            </p>
          </div>

          <div className="d-flex justify-content-between align-items-end">
            <div>
              <h4>Antonio Basset</h4>
              <p className="mb-0">Designed for Schultz</p>
            </div>
            <span>-&gt;</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
