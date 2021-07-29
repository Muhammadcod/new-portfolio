import React from 'react';
import ReactDOM from 'react-dom';

const ContactModal = props => {
  if (!props.show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-view">
      <div
        className="contact-block site-modal gr-bg-blackish-blue dark-bg-text"
        id="contact-modal"
        data-animation-in="animate__fadeInUp"
        data-animation-out="animate__fadeOutUp"
      >
        <div className="site-header">
          <div className="container-fluid gr-pl-lg-10 gr-pr-lg-10">
            <nav className="navbar pl-0 pr-0 gr-pt-7 gr-pb-5 ">
              <a className="navbar-brand" href="index.html">
                <h2 className="gr-text-6 text-white font-weight-bolder">
                  folio.
                </h2>
              </a>
              <div className="cross-btn">
                <span
                  onClick={props.close}
                  className="close-contact-modal folio-modal-close gr-text-color gr-text-6 link-hover-reset"
                >
                  <i className="icon icon-bold-remove" />
                </span>
              </div>
            </nav>
          </div>
        </div>
        <div className="container gr-pt-lg-17 gr-pt-10 gr-pb-12">
          <div className="row">
            <div className="col-xl-5 d-flex align-items-center order-2 gr-mb-7">
              <div className="contact-widget-box d-inline-block w-100 border-radius-10 gr-p-8 gr-border-radius-10 gr-bg-blue-opacity-1 gr-ml-10">
                <div className="single-contact-widget gr-pb-9">
                  <span className="gr-text-8 d-block gr-color-white">
                    Email me at
                  </span>
                  <a
                    href="mailto:hello@folio.com"
                    className="gr-text-8 font-weight-bold"
                  >
                    hello@folio.com
                  </a>
                </div>
                <div className="single-contact-widget">
                  <span className="gr-text-8 d-block gr-color-white">
                    Call me at
                  </span>
                  <a
                    href="phone:hello@folio.com"
                    className="gr-text-8 font-weight-bold"
                  >
                    +1-402-4983
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1">
              <div className="gr-pr-lg-7 gr-pr-xl-15 gr-pb-10">
                <h2 className="gr-text-3 text-white font-weight-bold gr-pb-5">
                  Contact now
                </h2>
                <p className="gr-text-8 gr-heading-color gr-pr-xl-1 gr-pb-2">
                  Have a project or question? Send me a message. I will reply
                  within 48 hours.
                </p>
              </div>
              <form action="#" method="POST" id="ajax-form">
                <div className="folio-form">
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control text-white"
                    placeholder="Your name"
                  />
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="form-control text-white"
                    placeholder="Email address"
                  />
                  <input
                    name="subject"
                    id="subject"
                    type="text"
                    className="form-control text-white"
                    placeholder="Subject"
                  />
                  <textarea
                    name="message"
                    id="message"
                    className="form-control text-white"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  className="btn btn-primary with-icon rounded-pill pageload-link btn-hover-translate btn-hover-shadow-down gr-mt-9"
                >
                  send{' '}
                  <i className="icon icon-tail-right gr-text-8 font-weight-bolder"></i>
                </button>
                <div className="form_icon fa fa-refresh fa-spin"></div>
                <p id="form-messages" className="gr-pt-10"></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('container')
  );
};

export default ContactModal;
