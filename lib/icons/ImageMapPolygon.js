import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ImageMapPolygon = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Image Map Polygon',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="${height}"
      viewBox="0 0 48 48"
      width="${width}"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-ImageMapPolygon-${count}`}"
      aria-describedby="${`title-ImageMapPolygon-${count}`}"
    >
      <title id="${`title-ImageMapPolygon-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ImageMapPolygon-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M47 0H37a1 1 0 00-1 1v7.478l-6 2.667V11a1 1 0 00-1-1H19a1 1 0 00-1 1v1.618l-6-1.333V5a1 1 0 00-1-1H1a1 1 0 00-1 1v10a1 1 0 001 1h4.139l4.923 16H9a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-3.972l12-2V39a1 1 0 001 1h10a1 1 0 001-1V29a1 1 0 00-1-1h-2.054l2.462-16H47a1 1 0 001-1V1a1 1 0 00-1-1zM22 14h4v4h-4zM8 12H4V8h4zm8 28h-4v-4h4zm16-11v3.973l-12 2V33a1 1 0 00-1-1h-4.754L9.322 16H11a1 1 0 00.926-.634L18 16.716V21a1 1 0 001 1h10a1 1 0 001-1v-5.478L37.924 12h1.438L36.9 28H33a1 1 0 00-1 1zm8 7h-4v-4h4zm4-28h-4V4h4z"
        fill="currentColor"
      />
    </svg>
  `;
};
