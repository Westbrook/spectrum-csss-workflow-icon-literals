import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Individual = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Individual',
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
      aria-labelledby="${`title-Individual-${count}`}"
      aria-describedby="${`title-Individual-${count}`}"
    >
      <title id="${`title-Individual-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Individual-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="8" rx="2" ry="2" width="8" x="20" y="20" />
      <path
        d="M37 18a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v1H18v-1a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1h1v12h-1a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-1h12v1a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1h-1V18zm-5 12h-1a1 1 0 00-1 1v1H18v-1a1 1 0 00-1-1h-1V18h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1z"
      />
    </svg>
  `;
};
