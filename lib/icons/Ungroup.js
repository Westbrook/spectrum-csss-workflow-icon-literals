import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Ungroup = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Ungroup',
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
      aria-labelledby="${`title-Ungroup-${count}`}"
      aria-describedby="${`title-Ungroup-${count}`}"
    >
      <title id="${`title-Ungroup-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Ungroup-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="8" rx="2" ry="2" width="8" x="28" y="28" />
      <path
        d="M45 26a1 1 0 001-1v-6a1 1 0 00-1-1h-6a1 1 0 00-1 1v1H26v-1a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1h1v12h-1a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-1h12v1a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1h-1V26zm-5 12h-1a1 1 0 00-1 1v1H26v-1a1 1 0 00-1-1h-1V26h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1z"
      />
      <path
        d="M14 24H8v-1a1 1 0 00-1-1H6V10h1a1 1 0 001-1V8h12v1a1 1 0 001 1h1v4h4v-4h1a1 1 0 001-1V3a1 1 0 00-1-1h-6a1 1 0 00-1 1v1H8V3a1 1 0 00-1-1H1a1 1 0 00-1 1v6a1 1 0 001 1h1v12H1a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-1h6z"
      />
      <path d="M14 16a2 2 0 012-2h2a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2h2z" />
    </svg>
  `;
};
