import * as React from 'react';
import * as Scrivito from 'scrivito';
import getHomepage from '../../utils/getHomepage.js';

function logoObj({ scrolled, navigationStyle }) {
  let logoVersion;
  if (scrolled) {
    logoVersion = 'logoDark';
  } else if (navigationStyle === 'transparentDark') {
    logoVersion = 'logoWhite';
  } else {
    logoVersion = 'logoDark';
  }

  const root = getHomepage();
  if (root) { return root.get(logoVersion); }
}

function Logo({ scrolled, navigationStyle }) {
  if (!getHomepage()) { return null; }

  const logo = logoObj({ scrolled, navigationStyle });

  return (
    <Scrivito.LinkTag to={ getHomepage() } className="navbar-brand">
      <Scrivito.ImageTag content={ logo } alt="Logo" />
    </Scrivito.LinkTag>
  );
}

export default Scrivito.connect(Logo);
