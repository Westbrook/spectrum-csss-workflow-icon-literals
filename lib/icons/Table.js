import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Table = ({ width = 24, height = 24, hidden = false, title = 'Table', desc } = {}) => {
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
      aria-labelledby="${`title-Table-${count}`}"
      aria-describedby="${`title-Table-${count}`}"
    >
      <title id="${`title-Table-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Table-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2zM16 40H8v-4h8zm0-8H8v-4h8zm0-8H8v-4h8zm24 16H20v-4h20zm0-8H20v-4h20zm0-8H20v-4h20zm0-8H8V8h32z"
        fill="currentColor"
      />
    </svg>
  `;
};
