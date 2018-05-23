import * as React from 'react';
import * as Scrivito from 'scrivito';
import getHomepage from '../utils/getHomepage.js';

function Footer() {
  const root = getHomepage();

  if (!root) { return null; }

  return (
    <Scrivito.ContentTag content={ root } attribute="footer" tag="footer" />
  );
}

export default Scrivito.connect(Footer);
