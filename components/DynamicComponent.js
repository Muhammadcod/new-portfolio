import React from 'react';
import { urlFor } from '../lib/sanity';
import PortableText from 'react-portable-text';

const DynamicComponent = ({ projectDetails }) => {
  const { demo, image, name, dateCreated, technology, description } = projectDetails;

  return (
    <main>
      <div className="site-wrapper overflow-hidden position-relative">
        <div className="banner-block">
          <div className="container-fluid gr-pl-lg-10 gr-pr-lg-10">
            <div className="protfolio-image">
              <img src={urlFor(image).url()} alt="" className="w-100" />
            </div>
          </div>
        </div>

        <div className="portfolio-details-block gr-pt-10 gr-pt-md-17 gr-pb-lg-14 gr-pb-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-10 col-md-12">
                <div className="texts gr-pr-xl-13">
                  <span className="d-block text-uppercase gr-text-12 font-weight-bold gr-pb-6 gr-heading-color-opacity">
                    Branding
                  </span>
                  <h2 className="gr-text-3 font-weight-bold gr-pb-6">
                    Adaptable but Identifiable Product for Kandinsky.
                  </h2>
                  <p className="gr-text-9 gr-text-color-opacity">
                    <PortableText
                      content={description}
                      serializers={{
                        h1: (props) => <h1 style={{ color: 'red' }} {...props} />,
                        li: ({ children }) => <li className="special-list-item">{children}</li>,
                        someCustomType: DynamicComponent
                      }}
                      className=""
                    />
                  </p>
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
                        Time
                      </span>
                      <h3 className="h3">{dateCreated}</h3>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-xl-4 d-flex justify-content-lg-end align-items-end gr-pb-7">
                    <div>
                      <a
                        href={demo}
                        className="btn btn-primary rounded-pill with-icon btn-hover-translate btn-hover-shadow-down">
                        Live work <i className="icon icon-tail-right"></i>
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
                      <div className="d-flex ">
                        {technology.map((tech) => (
                          <h3 className="h3 mr-3">{tech}</h3>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="half-theme-gray-4-bg gr-pb-md-15 gr-pb-10 gr-pt-md-0 gr-pt-10">
          <div className="container">
            <figure className="gr-mb-md-10">
              <img src="./image/jpg/details/details-8.jpg" alt="" className="w-100" />
            </figure>
            <figure className="gr-mb-md-10">
              <img src="./image/jpg/details/details-7.jpg" alt="" className="w-100" />
            </figure>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DynamicComponent;
