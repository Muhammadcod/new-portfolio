import React from 'react';
import { motion } from 'framer-motion';
import ExternalLink from './ExternalLink';
import { urlFor } from '../lib/sanity';
import Link from 'next/link';
import classnames from 'classnames';

const ProjectCard = ({ variants, item, i }) => {
  const { name, technology, shorts, image } = item;
  const colors = [
    {
      b: `#FFF7F0`,
      t: `#DF955A`
    },
    {
      b: `#EAECF0`,
      t: `#00D560`
    },
    {
      b: `#EFF2FF`,
      t: `#5065D5`
    },
    {
      b: `#FFEEFE`,
      t: `#D520CA`
    },
    {
      b: `#F7EDC6`,
      t: `#D59F00`
    },
    {
      b: `#FFF0F0`,
      t: `#D55050`
    }
  ];

  return (
    <>
      <motion.div
        variants={variants}
        className={classnames('col-12 col-md-6', {
          'mt-lg-5': i === 1
        })}>
        <div
          className="p-3"
          style={{
            borderRadius: `20px`,
            border: `1px solid #EAECF0`,
            background: colors[i]?.b
          }}>
          <img
            alt=""
            className="w-100"
            src={urlFor(image).url()}
            style={{ borderRadius: `20px` }}
          />
          <div className="d-flex justify-content-between align-items-start mt-3">
            <h4 className="project-title" style={{ color: colors[i]?.t }}>
              {name}
            </h4>
          </div>

          {shorts ? (
            <div className="">
              <p className="mt-2 project-description text-justify">{shorts}</p>
            </div>
          ) : null}

          <div className="d-flex justify-content-between align-items-end">
            <div className="d-flex flex-wrap mt-3 project-tech-list">
              {technology.length
                ? technology.map((tech) => <div className="me-2 list">{tech}</div>)
                : null}
            </div>
            <div>
              <Link href={`/project/${item.slug.current}`} className="gr-heading-color">
                <ExternalLink />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
