import React from 'react';
import SideBar from './SideBar';

const Layout = ({ children, animateLayout }) => {
  const containerStyle = { background: animateLayout ? `#1e1e1e` : `#fff` };
  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="row">
        <SideBar animateLayout={animateLayout} />
        <div className="col">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
