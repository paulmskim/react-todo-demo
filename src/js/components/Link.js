import React from 'react';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span class="footer-link active">{children}</span>;
  }

  return (
    <a
      class="footer-link"
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

export default Link;
