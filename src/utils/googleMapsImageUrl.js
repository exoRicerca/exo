const separator = '|';

// Some styling sources:
// * https://mapstyle.withgoogle.com
// * https://snazzymaps.com
const googleStyles = [
  {
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
  },
];

function isColor(value) {
  return /^#[0-9a-f]{6}$/i.test(value.toString());
}

function toColor(value) {
  return `0x${value.slice(1)}`;
}

function computeTag(featureType, elementType) {
  if (!featureType && !elementType) { return 'feature:all'; }

  const target = [];

  if (featureType) { target.push(`feature:${featureType}`); }
  if (elementType) { target.push(`element:${elementType}`); }

  return target.join(separator);
}

function computeStyler(stylers) {
  const styles = [];

  stylers.forEach(styler => {
    const key = Object.keys(styler)[0]; // there is only one per element
    const value = styler[key];
    const normalizedValue = isColor(value) ? toColor(value) : value;

    styles.push(`${key}:${normalizedValue}`);
  });

  return styles.join(separator);
}

function computeStyle(item) {
  const target = computeTag(item.featureType, item.elementType);
  const styler = computeStyler(item.stylers);

  return target + separator + styler;
}

function stylingParamsArray() {
  return googleStyles.map(i => computeStyle(i)).map(i => ['style', i]);
}

function googleMapsImageUrl(params) {
  const paramsArray = Object.entries(params).concat(stylingParamsArray());
  const flattenParams = paramsArray.map(([key, value]) => `${key}=${value}`).join('&');
  const uri = `https://maps.google.com/maps/api/staticmap?${flattenParams}`;

  return encodeURI(uri);
}

export default googleMapsImageUrl;
