import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Archive = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Archive',
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
      aria-labelledby="${`title-Archive-${count}`}"
      aria-describedby="${`title-Archive-${count}`}"
    >
      <title id="${`title-Archive-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Archive-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="8" rx="2" ry="2" width="48" y="6" />
      <path
        d="M4 18v22a2 2 0 002 2h36a2 2 0 002-2V18zm27 14H17a1 1 0 01-1-1v-6a1 1 0 011-1h14a1 1 0 011 1v6a1 1 0 01-1 1z"
      />
    </svg>
  `;
};
