import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Polygon = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Polygon',
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
      aria-labelledby="${`title-Polygon-${count}`}"
      aria-describedby="${`title-Polygon-${count}`}"
    >
      <title id="${`title-Polygon-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Polygon-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M41.261 24.049l-8.387 14.094H15.181L6.743 23.976l8.434-14.119h17.69zM34.279 6H13.773a1.386 1.386 0 00-1.216.721l-9.91 16.59a1.383 1.383 0 000 1.324l9.912 16.642a1.383 1.383 0 001.215.723h20.507a1.386 1.386 0 001.217-.724l9.856-16.562a1.387 1.387 0 000-1.319L35.5 6.727A1.385 1.385 0 0034.279 6z"
        fill="currentColor"
      />
    </svg>
  `;
};
