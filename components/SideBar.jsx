import Twitter from './assets/Twitter';
import Github from './assets/Github';
import LinkedIn from './assets/LinkedIn';
import profile from '/lib/public/profile.jpg';
import Image from 'next/image';
import ActiveLink from './ActiveLink';

const SideBar = ({ animateLayout }) => {
  const highlightText = { color: animateLayout ? `#FCFCFD` : `#121926` };

  return (
    <aside className="col-12 col-md-6 min-vh-100 d-md-none d-lg-block">
      <div className="position-sticky" style={{ top: `0%` }}>
        <div className="row sidebar ">
          <div
            className={
              'col-md-1 d-none d-md-flex justify-content-center align-items-end mh-100 sidebar-social'
            }
            style={{
              background: animateLayout ? `#262626` : `#fff`,
              borderRight: animateLayout
                ? `1px solid rgba(234, 236, 240, 0.05)`
                : `1px solid #EAECF0`
            }}>
            <ul className="mb-0 mb-4 p-0">
              <li className="text-center mt-4">
                <a href="https://twitter.com/adebayomuhamma2">
                  <Twitter />
                </a>
              </li>
              <li className="text-center mt-4">
                <a href="https://github.com/Muhammadcod">
                  <Github />
                </a>
              </li>
              <li className="text-center mt-4">
                <a href="https://www.linkedin.com/in/adebayo-mohammed">
                  <LinkedIn />
                </a>
              </li>
              <li>
                <Image src={profile} alt="M" className="avatar mt-4 border" />
              </li>
            </ul>
          </div>
          <div
            className="col d-flex flex-column justify-content-between sidebar-main"
            style={{ background: animateLayout ? `#1e1e1e` : `#fff` }}>
            <div className="ms-md-4 title-header">
              <p style={{ color: `#9AA4B2` }}>
                I'm a <span style={highlightText}>Frontend engineer, </span> who brings{' '}
                <span style={highlightText}>elegance</span> to the front-end, one line of code at a
                time - Crafting{' '}
                <span className="d-inline" style={highlightText}>
                  visually stunning and interactive
                </span>{' '}
                user experience.
              </p>
            </div>
            <div className="col-1 main-nav">
              <ul className="mb-4" style={{ color: `#9AA4B2` }}>
                <li className="d-inline gr-mr-6" aria-current="true">
                  <ActiveLink to="/">Project</ActiveLink>
                </li>
                <li className="d-inline gr-mr-6">
                  <ActiveLink to="about">About</ActiveLink>
                </li>
                {/*<li className="d-inline gr-mr-6">
                  <ActiveLink to="blog">
                    Blog <span className="text-muted soon-text position-absolute">Soon</span>
                  </ActiveLink>
                </li>*/}
                <li className="d-inline gr-mr-6">
                  <ActiveLink to="contact">Contact</ActiveLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
