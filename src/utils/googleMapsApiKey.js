import * as Scrivito from 'scrivito';
import getHomepage from './getHomepage.js';

function googleMapsApiKey() {
  const root = getHomepage();
  if (!root) { return ''; }

  return root.get('googleMapsApiKey');
}

export default googleMapsApiKey;
