import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Add = ({ width = 24, height = 24, hidden = false, title = 'Add', desc } = {}) => {
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
      aria-labelledby="${`title-Add-${count}`}"
      aria-describedby="${`title-Add-${count}`}"
    >
      <title id="${`title-Add-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Add-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M37 20H26V9a1 1 0 00-1-1h-4a1 1 0 00-1 1v11H9a1 1 0 00-1 1v4a1 1 0 001 1h11v11a1 1 0 001 1h4a1 1 0 001-1V26h11a1 1 0 001-1v-4a1 1 0 00-1-1z"
        fill="currentColor"
      />
    </svg>
  `;
};
