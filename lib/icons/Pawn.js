import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Pawn = ({ width = 24, height = 24, hidden = false, title = 'Pawn', desc } = {}) => {
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
      aria-labelledby="${`title-Pawn-${count}`}"
      aria-describedby="${`title-Pawn-${count}`}"
    >
      <title id="${`title-Pawn-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Pawn-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="6" rx="1.265" ry="1.265" width="32" x="8" y="42" />
      <path
        d="M34.775 18h-21.55A1.225 1.225 0 0012 19.225v3.551A1.225 1.225 0 0013.225 24h6.025L14 38h20l-5.25-14h6.025A1.225 1.225 0 0036 22.775v-3.55A1.225 1.225 0 0034.775 18z"
      />
      <circle cx="24" cy="10" r="8" />
    </svg>
  `;
};
