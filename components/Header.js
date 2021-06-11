import React from 'react';

const Header = () => {
  return (
    <header className="site-header site-header-menu--right">
      <div className="container-fluid pr-lg--30 pl-lg--30">
        <nav className="navbar site-navbar offcanvas-active navbar-expand-lg navbar-light">
          {/*Brand Logo*/}
          <div className="brand-logo">
            <a href="index.html">
              <h2 className="gr-text-6 font-weight-bolder">muhammad.</h2>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="mobile-menu">
            <div className="navbar-nav mr--10">
              <ul className="navbar-nav main-menu">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link gr-text-color font-weight-bold modal-trigger gr-text-11 portolio-modal-trigger"
                    href="/"
                  >
                    home.
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link gr-text-color font-weight-bold modal-trigger gr-text-11 portolio-modal-trigger"
                    href="#portfolio-modal"
                  >
                    about me.
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link gr-text-color font-weight-bold modal-trigger gr-text-11 contact-modal-trigger"
                    href="#contact-modal"
                  >
                    contact.
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link gr-text-color font-weight-bold modal-trigger gr-text-11 contact-modal-trigger"
                    href="/"
                  >
                    cV.
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="d-block d-lg-none offcanvas-btn-close"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <i className="gr-cross-icon"></i>
            </button>
          </div>
          <button
            className="navbar-toggler btn-close-off-canvas hamburger-icon border-0"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-menu"
            aria-controls="mobile-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger hamburger--squeeze js-hamburger">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
