import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Card = ({ width = 24, height = 24, hidden = false, title = 'Card', desc } = {}) => {
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
      aria-labelledby="${`title-Card-${count}`}"
      aria-describedby="${`title-Card-${count}`}"
    >
      <title id="${`title-Card-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Card-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 2H6a2 2 0 00-2 2v40a2 2 0 002 2h36a2 2 0 002-2V4a2 2 0 00-2-2zM16 39a1 1 0 01-1 1H9a1 1 0 01-1-1v-2a1 1 0 011-1h6a1 1 0 011 1zm24 0a1 1 0 01-1 1H21a1 1 0 01-1-1v-2a1 1 0 011-1h18a1 1 0 011 1zm0-9H8V6h32z"
        fill="currentColor"
      />
    </svg>
  `;
};
