import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <Layout>
      <div className="hero-section ">
        <div className="hero-pattern absolute-top gr-abs-top w-100 z-index-n1">
          <img src="./image/webp/hero-pattern.webp" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-start gr-pt-lg-14 gr-pb-lg-14 gr-pt-12 gr-pb-7">
            <div className="col-lg-12">
              <div className="hero-content text-center portfolio-card-hover">
                <div className="gr-pb-10">
                  <img
                    src="./image/jpg/portfolio-about-2.jpg"
                    className="card-image rounded-pill"
                  />
                </div>
                <span className="gr-text-10 font-weight-bold text-uppercase gr-pb-8 d-inline-block letter-spacings-1">
                  Hi, I am Muhammad Adebayo
                </span>
                <h2 className="gr-text-2 font-weight-bold">
                  Frontend Developer <br /> who loves nature!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <Projects />
      {/*<div
        className="portfolio-about-block gr-bg-blue dark-bg-text site-modal"
        id="portfolio-modal"
        data-animation-in="animate__backInUp"
        data-animation-out="animate__zoomOutDown"
      >
        <div className="site-header">
          <div className="container-fluid gr-pl-lg-10 gr-pr-lg-10">
            <nav className="navbar pl-0 pr-0 gr-pt-7 gr-pb-5 ">
              <a className="navbar-brand" href="index.html">
                <h2 className="gr-text-6 font-weight-bolder">folio.</h2>
              </a>
              <div className="cross-btn">
                <a
                  href="#"
                  className="close-portfolio-modal folio-modal-close gr-text-color gr-text-6 link-hover-reset"
                >
                  <i className="icon icon-bold-remove"></i>
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div className="container gr-pt-lg-17 gr-pt-10 gr-pb-17">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-7 col-sm-8 col-xs-9 gr-pb-8 gr-pb-lg-0">
              <div className="portfolio-about-image">
                <img
                  src="./image/jpg/portfolio-about.jpg"
                  alt=""
                  className="w-100 image-box-shadow"
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 offset-xl-1 col-md-7">
              <div className="portfolio-about-text">
                <h2 className="gr-text-3 font-weight-bold gr-pb-8">
                  Bruce Ryan
                </h2>
                <p className="gr-heading-color gr-pb-5">
                  UX Designer based in New York, USA. I am designing with a
                  minimal and beautiful design in mind.
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
                    hello@folio.com
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
                  Bruce Ryan
                </h4>
                <p className="d-block gr-text-8 gr-heading-color">
                  Founder of Folio Digital
                </p>
                <div className="social-links gr-pt-9">
                  <a
                    href=""
                    className="gr-color-gray-3 gr-text-12 font-weight-bold gr-mr-8 letter-spacings-1 link-hover-rotate link-hover-light text-uppercase"
                  >
                    Dribble
                  </a>
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
      </div>*/}

      <div className="gr-pt-lg-17 gr-pb-lg-13 gr-pt-9 gr-pb-9 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11 text-center">
              <h2 className="gr-text-3 font-weight-bold gr-px-xl-7">
                I am taking new projects. Waiting to hearing about new projects,
                so if you'd like to chat please get in touch.
              </h2>
              <ul className="llinks-inline d-flex flex-wrap justify-content-center gr-pt-md-11 gr-pt-10 pl-0">
                <li className="text-uppercase border-right-sm font-weight-bold gr-text-12 letter-spacing-1_63">
                  <a
                    href=""
                    className="gr-px-7  d-inline-block btn-hover-translate"
                  >
                    <span>contact@folio.design</span>
                  </a>
                </li>
                <li className="text-uppercase font-weight-bold gr-text-12 letter-spacing-1_63">
                  <a
                    href=""
                    className="gr-px-7 d-inline-block btn-hover-translate"
                  >
                    <span>linkedin.com/folio</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
