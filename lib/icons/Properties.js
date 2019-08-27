import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Properties = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Properties',
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
      aria-labelledby="${`title-Properties-${count}`}"
      aria-describedby="${`title-Properties-${count}`}"
    >
      <title id="${`title-Properties-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Properties-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M43 8H21.675a6.956 6.956 0 00-13.35 0H5a1 1 0 00-1 1v2a1 1 0 001 1h3.325a6.956 6.956 0 0013.35 0H43a1 1 0 001-1V9a1 1 0 00-1-1zm-28 5.3a3.3 3.3 0 113.3-3.3 3.3 3.3 0 01-3.3 3.3zM5 26h21.325a6.956 6.956 0 0013.35 0H43a1 1 0 001-1v-2a1 1 0 00-1-1h-3.325a6.956 6.956 0 00-13.35 0H5a1 1 0 00-1 1v2a1 1 0 001 1zm24.7-2a3.3 3.3 0 113.3 3.3 3.3 3.3 0 01-3.3-3.3z"
      />
      <path
        d="M43 36H27.675a6.956 6.956 0 00-13.35 0H5a1 1 0 00-1 1v2a1 1 0 001 1h9.325a6.956 6.956 0 0013.35 0H43a1 1 0 001-1v-2a1 1 0 00-1-1zm-22 5.3a3.3 3.3 0 113.3-3.3 3.3 3.3 0 01-3.3 3.3z"
      />
    </svg>
  `;
};
