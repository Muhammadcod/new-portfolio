import { motion } from 'framer-motion';
import Link from 'next/link';
import { urlFor } from '../lib/sanity';

const ProjectCard = ({ variants, item }) => {
  const { name, technology, shorts, image } = item;
  console.log(item, 'item');
  return (
    <>
      <motion.div variants={variants} className="col-sm-12 col-md-4">
        <div className="border p-3" style={{ borderRadius: `15px` }}>
          <img
            src={urlFor(image).url()}
            alt=""
            className="w-100"
            style={{ borderRadius: `15px` }}
          />
          <div className="d-flex justify-content-between align-items-start mt-3">
            <h4>{name}</h4>
            <Link href={`/project/${item.slug.current}`} className="gr-heading-color">
              <span>IC</span>
            </Link>
          </div>

          {shorts ? (
            <div className="">
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique.
              </p>
            </div>
          ) : null}

          <div className="d-flex justify-content-between align-items-end">
            <div className="d-flex flex-wrap mt-3">
              {technology.length
                ? technology.map((tech) => <div className="me-2">{tech}</div>)
                : null}
            </div>
            <span>-&gt;</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
