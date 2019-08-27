import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Clock = ({ width = 24, height = 24, hidden = false, title = 'Clock', desc } = {}) => {
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
      aria-labelledby="${`title-Clock-${count}`}"
      aria-describedby="${`title-Clock-${count}`}"
    >
      <title id="${`title-Clock-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Clock-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M26 22.086V11a1 1 0 00-1-1h-2a1 1 0 00-1 1v12.586a1 1 0 00.293.707l6.3 6.3a1 1 0 001.414 0l1.336-1.336a1 1 0 000-1.414l-5.054-5.054a1 1 0 01-.289-.703z"
      />
      <path
        d="M24 7.8A16.2 16.2 0 117.8 24 16.218 16.218 0 0124 7.8zM24 4a20 20 0 1020 20A20 20 0 0024 4z"
      />
    </svg>
  `;
};
