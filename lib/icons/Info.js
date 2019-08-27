import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Info = ({ width = 24, height = 24, hidden = false, title = 'Info', desc } = {}) => {
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
      aria-labelledby="${`title-Info-${count}`}"
      aria-describedby="${`title-Info-${count}`}"
    >
      <title id="${`title-Info-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Info-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 4.1A19.9 19.9 0 1043.9 24 19.9 19.9 0 0024 4.1zm-.3 6.2a2.717 2.717 0 012.864 2.824 2.664 2.664 0 01-2.864 2.863 2.705 2.705 0 01-2.864-2.864A2.716 2.716 0 0123.7 10.3zM28 35a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2a1 1 0 011-1h1v-8h-1a1 1 0 01-1-1v-2a1 1 0 011-1h4a1 1 0 011 1v11h1a1 1 0 011 1z"
        fill="currentColor"
      />
    </svg>
  `;
};
