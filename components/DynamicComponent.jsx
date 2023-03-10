import { motion } from 'framer-motion';
import PortableText from 'react-portable-text';
import { urlFor } from '../lib/sanity';

const DynamicComponent = ({ project = {} }) => {
  console.log(project);
  const { demo, image, name, dateCreated, technology, description, story } = project;
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container pt-5 ">
        <section className="container-fluid gr-pl-lg-10 gr-pr-lg-10">
          <span className="d-block text-uppercase gr-text-12 font-weight-bold gr-pb-6 gr-heading-color-opacity">
            Project
          </span>
          <h2 className="gr-text-3 font-weight-bold gr-pb-6">{name}</h2>
        </section>

        <section className="banner-block mb-5">
          <div className="container-fluid gr-pl-lg-10 gr-pr-lg-10">
            <div className="protfolio-image">
              {image && <img src={urlFor(image).url()} alt="" className="w-100" />}
            </div>
          </div>
        </section>

        <section className="container-fluid gr-pl-lg-10 gr-pr-lg-10">
          <div className="col-xl-12 col-lg-10 col-md-12">
            <div className="texts gr-pr-xl-13">
              <span className="d-block text-uppercase gr-text-12 font-weight-bold gr-pb-6 gr-heading-color-opacity">
                Description
              </span>
              <div className="gr-text-9 gr-text-color-opacity">
                <PortableText
                  content={description}
                  serializers={{
                    h1: (props) => <h1 style={{ color: 'red' }} {...props} />,
                    li: ({ children }) => <li className="special-list-item">{children}</li>,
                    someCustomType: DynamicComponent
                  }}
                  className=""
                />
              </div>
            </div>
            <div className="row gr-pt-12">
              <div className="col-sm-6 col-md-3 gr-pb-7">
                <div>
                  <span className="d-block gr-text-12 font-weight-bold text-uppercase gr-pb-3 gr-heading-color-opacity">
                    Client
                  </span>
                  <h3 className="h3">{name === 'Openess Emoji' ? 'Openess' : 'Personal'}</h3>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-xl-5 d-flex justify-content-lg-center gr-pb-7">
                <div>
                  <span className="d-block gr-text-12 font-weight-bold text-uppercase gr-pb-3 gr-heading-color-opacity">
                    Date
                  </span>
                  <h3 className="h3">{dateCreated}</h3>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-xl-4 d-flex justify-content-lg-end align-items-end gr-pb-7">
                <div>
                  <a
                    href={demo}
                    target="_blank"
                    className="btn btn-primary rounded-pill with-icon btn-hover-translate btn-hover-shadow-down">
                    Live work <i className="icon icon-tail-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="row gr-pt-12">
              <div className="col-sm-6 col-md-8 gr-pb-7">
                <div>
                  <span className="d-block gr-text-12 font-weight-bold text-uppercase gr-pb-3 gr-heading-color-opacity">
                    Tech Stack
                  </span>
                  {technology.length > 0 ? (
                    <div className="d-flex ">
                      {technology.map((tech) => (
                        <h3 key={tech} className="h3 mr-3">
                          {tech}
                        </h3>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {story && (
              <div className="texts gr-pr-xl-13">
                <h2 className="gr-text-3 font-weight-bold gr-pb-6">Story</h2>
                <div className="gr-text-9 gr-text-color-opacity">
                  <PortableText
                    content={story}
                    serializers={{
                      h1: (props) => <h1 style={{ color: 'red' }} {...props} />,
                      li: ({ children }) => <li className="special-list-item">{children}</li>,
                      someCustomType: DynamicComponent
                    }}
                    className=""
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </motion.main>

      <section className="container-fluid py-5">
        <div className="s">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11 text-center">
              <h2 className="gr-text-3 font-weight-bold gr-px-xl-7">
                I am taking new projects. Waiting to hearing about new projects, so if you'd like to
                chat please get in touch.
              </h2>
              <ul className="links-inline d-flex flex-wrap justify-content-center gr-pt-md-11 gr-pt-10 pl-0">
                <li className="text-uppercase border-right-sm font-weight-bold gr-text-12 letter-spacing-1_63">
                  <a
                    href="mailto:adebayomuhammad47@gmail.com"
                    className="gr-px-7  d-inline-block btn-hover-translate">
                    <span>Email</span>
                  </a>
                </li>
                <li className="text-uppercase font-weight-bold gr-text-12 letter-spacing-1_63">
                  <a
                    href="https://www.linkedin.com/in/adebayo-mohammed"
                    className="gr-px-7 d-inline-block btn-hover-translate">
                    <span>Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicComponent;
