import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TextSize = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Text Size',
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
      aria-labelledby="${`title-TextSize-${count}`}"
      aria-describedby="${`title-TextSize-${count}`}"
    >
      <title id="${`title-TextSize-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TextSize-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M19 20a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3h-4v14h3a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2a1 1 0 011-1h3V24H4v2.973a1 1 0 01-1 1H1a1 1 0 01-1-1V21a1 1 0 011-1z"
      />
      <path
        d="M46 6H16a2 2 0 00-2 2v7a1 1 0 001 1h2a1 1 0 001-1v-5h10v28h-3a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1h-3V10h10v5a1 1 0 001 1h2a1 1 0 001-1V8a2 2 0 00-2-2z"
      />
    </svg>
  `;
};
