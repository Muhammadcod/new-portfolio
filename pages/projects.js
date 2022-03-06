import React from 'react';
import {sanityClient, urlFor} from "../lib/sanity";

import Link from "next/link";

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

const Projects = ({projects}) => {
    return (
        <div className="portfolio-section gr-pt-lg-15 gr-pt-7" id="portfolio-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="iso-grid-wrap row">
                            {projects?.length > 0 &&
                                projects.slice(1).map((project) => (
                                    <div
                                        className="col-sm-6 col-md-4 gr-pb-7 gr-pb-lg-13 isotope-item all branding photography"
                                        key={project.id}>
                                        <div className="portfolio-card portfolio-card-hover">
                      <span className="card-image d-block">
                        <img src={urlFor(project.image).url()} alt="" className="w-100" />
                      </span>
                                            <div className="text-center gr-pt-8">
                        <span className="gr-text-13 font-weight-bold gr-text-color-opacity text-uppercase gr-pb-1 d-block">
                          UI Design
                        </span>
                                                <h3 className="gr-text-6 font-weight-bold">
                                                    <Link
                                                        href={`/projects/${project.slug.current}`}
                                                        className="gr-heading-color">
                                                        {project.name}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    const projects = await sanityClient.fetch(projectsQuery);
    return {
        props: {
            projects
        }
    };
}
export default Projects;
