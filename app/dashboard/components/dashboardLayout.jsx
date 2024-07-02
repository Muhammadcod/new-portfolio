'use client';
import SideBar from '../../../components/SideBar';

export default function DashboardLayout({ children, animateLayout, showSidebar = true }) {
  const containerStyle = { background: animateLayout ? `#1e1e1e` : `#fff` };
  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="row">
        {showSidebar ? <SideBar animateLayout={animateLayout} /> : null}
        <div className="col">{children}</div>
      </div>
    </div>
  );
}
