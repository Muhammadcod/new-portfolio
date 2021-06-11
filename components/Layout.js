import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <main>
      <div className="site-wrapper overflow-hidden position-relative">
        <Header />
        {children}
        <footer className="gr-py-md-11 gr-pt-0 gr-pb-11">
          <div className="container">
            <div className="text-center">
              <p className="heading-small text-uppercase">
                © 2020 All RIght reseved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Layout;
