import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const SmallCaps = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Small Caps',
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
      aria-labelledby="${`title-SmallCaps-${count}`}"
      aria-describedby="${`title-SmallCaps-${count}`}"
    >
      <title id="${`title-SmallCaps-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-SmallCaps-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M29 20a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-3h4v14h-3a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1h-3V24h4v2.973a1 1 0 001 1h2a1 1 0 001-1V21a1 1 0 00-1-1z"
      />
      <path
        d="M2 6h30a2 2 0 012 2v7a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5H20v28h3a1 1 0 011 1v2a1 1 0 01-1 1H11a1 1 0 01-1-1v-2a1 1 0 011-1h3V10H4v5a1 1 0 01-1 1H1a1 1 0 01-1-1V8a2 2 0 012-2z"
      />
    </svg>
  `;
};
