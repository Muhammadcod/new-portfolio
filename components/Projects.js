import React from 'react';
import { urlFor } from '../lib/sanity';
import Link from 'next/link';

const Projects = ({ projects }) => {
  console.log(projects, '...');
  return (
    <div
      className="portfolio-section gr-pt-lg-15 gr-pt-7"
      id="portfolio-section"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="iso-grid-wrap row">
              {projects?.length > 0 &&
                projects.slice(1, 7).map(project => (
                  <div
                    className="col-sm-6 col-md-4 gr-pb-7 gr-pb-lg-13 isotope-item all branding photography"
                    key={project.id}
                  >
                    <div className="portfolio-card portfolio-card-hover">
                      <a
                        href="./portfolio-details.html"
                        className="card-image d-block"
                      >
                        <img
                          src={urlFor(project.image).url()}
                          alt=""
                          className="w-100"
                        />
                      </a>
                      <div className="text-center gr-pt-8">
                        <span className="gr-text-13 font-weight-bold gr-text-color-opacity text-uppercase gr-pb-1 d-block">
                          UI Design
                        </span>
                        <h3 className="gr-text-6 font-weight-bold">
                          <Link
                            href={`/projects/${project.slug.current}`}
                            className="gr-heading-color"
                          >
                            {project.name}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              {projects?.length > 0 &&
                projects.slice(7, 9).map(project => (
                  <div
                    key={project.id}
                    className="col-sm-6 col-md-6 gr-pb-7 gr-pb-lg-13 isotope-item all  photography design"
                  >
                    <div className="portfolio-card portfolio-card-hover">
                      <a
                        href="./portfolio-details.html"
                        className="card-image d-block"
                      >
                        <img
                          src={urlFor(project.image).url()}
                          alt=""
                          className="w-100"
                        />
                      </a>
                      <div className="text-center gr-pt-8">
                        <span className="gr-text-13 font-weight-bold gr-text-color-opacity text-uppercase gr-pb-1 d-block">
                          UI Design
                        </span>
                        <h3 className="gr-text-6 font-weight-bold">
                          <a
                            href="portfolio-details.html"
                            className="gr-heading-color"
                          >
                            {project.name}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-12 text-center">
            <a
              href=""
              className="btn btn-outline rounded-pill gr-text-12 gr-btn-border"
            >
              All works
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
