import React from 'react';
import Link from '../container/Link';

const Footer = () => (
  <div className="footer">
    <Link filter="SHOW_ALL">
      All
    </Link>
    <Link filter="SHOW_ACTIVE">
      Active
    </Link>
    <Link filter="SHOW_COMPLETED">
      Completed
    </Link>
  </div>
);

export default Footer;
