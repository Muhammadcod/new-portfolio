import React from 'react';
import SideBar from './SideBar';

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <div className="col" style={{ border: `1px solid blue` }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
