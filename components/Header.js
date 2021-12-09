import React, { useState } from 'react';
import Modal from './Modal';
import ContactModal from './ContactModal';

const Header = () => {
  const [show, setShow] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleShow = () => {
    setShow(true);
    document.body.style.overflow = 'hidden';
  };

  const handleShowContact = () => {
    setShowContact(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = 'auto';
    }
    setShow(false);
  };
  const handleCloseContact = () => {
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = 'auto';
    }
    setShowContact(false);
  };
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
                    href="/">
                    home.
                  </a>
                </li>
                <li className="nav-item dropdown text-muted">
                  <span
                    className="nav-link  gr-text-color font-weight-bold modal-trigger gr-text-11 cursor portolio-modal-trigger"
                    // onClick={handleShow}
                    onClick={() => null}>
                    about me.
                  </span>
                </li>
                <li className="nav-item d-none">
                  <span
                    className="nav-link text-muted gr-text-color font-weight-bold modal-trigger gr-text-11 contact-modal-trigger"
                    // onClick={handleShowContact}
                    onClick={() => null}>
                    contact.
                  </span>
                </li>
                <li className="nav-item d-none">
                  <a
                    className="nav-link gr-text-color font-weight-bold modal-trigger gr-text-11 contact-modal-trigger"
                    href="/">
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
              aria-label="Toggle navigation">
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
            aria-label="Toggle navigation">
            <div className="hamburger hamburger--squeeze js-hamburger">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </button>
        </nav>
      </div>
      <Modal show={show} close={handleClose} />
      <ContactModal show={showContact} close={handleCloseContact} />
    </header>
  );
};

export default Header;
