import React from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';

const ActiveLink = ({ to, children }) => {
  const location = useRouter();

  const isActive = location.asPath === `/${to}`;
  const activeClass = isActive ? 'active' : 'link-grey';
  return (
    <a href={`#${to}`} className={classnames(activeClass)} style={{ position: `relative` }}>
      {children}
    </a>
  );
};

export default ActiveLink;
