import React, { PropTypes } from 'react';

const Link = ({ active, children, onClick }) => {
  const footerLinkClass = 'footer-link footer-link-' + children.toLowerCase();

  if (active) {
    return <span className={footerLinkClass + ' active'}>{children}</span>;
  }

  return (
    <a
      className={footerLinkClass}
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

Link.PropTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
