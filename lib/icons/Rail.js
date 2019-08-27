import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Rail = ({ width = 24, height = 24, hidden = false, title = 'Rail', desc } = {}) => {
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
      aria-labelledby="${`title-Rail-${count}`}"
      aria-describedby="${`title-Rail-${count}`}"
    >
      <title id="${`title-Rail-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Rail-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="6" rx="1" ry="1" width="36" x="6" y="6" />
      <rect height="6" rx="1" ry="1" width="36" x="6" y="20" />
      <rect height="6" rx="1" ry="1" width="36" x="6" y="34" />
    </svg>
  `;
};
