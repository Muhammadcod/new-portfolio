import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  if (!props.show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-view">
      <div
        className="portfolio-about-block gr-bg-blue dark-bg-text site-modal"
        id="portfolio-modal"
        data-animation-in="animate__backInUp"
        data-animation-out="animate__zoomOutDown"
      >
        <div className="site-header">
          <div className="container-fluid gr-pl-lg-10 gr-pr-lg-10">
            <nav className="navbar pl-0 pr-0 gr-pt-7 gr-pb-5 ">
              <a className="navbar-brand" href="index.html">
                <h2 className="gr-text-6 font-weight-bolder">muhammad.</h2>
              </a>
              <div className="cross-btn">
                <span
                  className="close-portfolio-modal folio-modal-close gr-text-color gr-text-6 link-hover-reset"
                  onClick={props.close}
                >
                  <i className="icon icon-bold-remove" />
                </span>
              </div>
            </nav>
          </div>
        </div>
        <div className="container gr-pt-lg-17 gr-pt-10 gr-pb-17">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-7 col-sm-8 col-xs-9 gr-pb-8 gr-pb-lg-0">
              <div className="portfolio-about-image">
                <img
                  src="/portfolio-about.jpg"
                  alt=""
                  className="w-100 image-box-shadow"
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 offset-xl-1 col-md-7">
              <div className="portfolio-about-text">
                <h2 className="gr-text-3 font-weight-bold gr-pb-8">
                  Mohammed Adebayo
                </h2>
                <p className="gr-heading-color gr-pb-5">
                  Frontend Developer based in Lagos, Nigeria. I am develop
                  writing minimal and efficient code and keeping design
                  specifics in mind.
                </p>
                <p className="gr-heading-color gr-pb-5">
                  I strive for a minimal and beautiful design.
                </p>
                <div className="contact-block gr-pb-9">
                  <span className="gr-text-8 d-block gr-text-color">
                    Email me at
                  </span>
                  <a
                    href="mailto:hello@folio.com"
                    className="gr-text-8 font-weight-bold gr-text-color link-hover-light"
                  >
                    adebayomuhammad47@gmail.com
                  </a>
                </div>
                <div className="signature-block gr-pt-3 gr-pb-4">
                  <img
                    src="./image/png/signature.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h4 className="d-block gr-text-8 gr-heading-color">
                  Mohammed Adebayo
                </h4>
                <p className="d-block gr-text-8 gr-heading-color"></p>
                <div className="social-links gr-pt-9">
                  <a
                    href=""
                    className="gr-color-gray-3 gr-text-12 font-weight-bold gr-mr-8 letter-spacings-1 link-hover-rotate link-hover-light text-uppercase"
                  >
                    Twitter
                  </a>
                  <a
                    href=""
                    className="gr-color-gray-3 gr-text-12 font-weight-bold gr-mr-8 letter-spacings-1 link-hover-rotate link-hover-light text-uppercase"
                  >
                    Facebook
                  </a>
                  <a
                    href=""
                    className="gr-color-gray-3 gr-text-12 font-weight-bold letter-spacings-1 link-hover-rotate link-hover-light text-uppercase"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('container')
  );
};

export default Modal;
