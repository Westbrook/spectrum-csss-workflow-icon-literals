import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Type = ({ width = 24, height = 24, hidden = false, title = 'Type', desc } = {}) => {
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
      aria-labelledby="${`title-Type-${count}`}"
      aria-describedby="${`title-Type-${count}`}"
    >
      <title id="${`title-Type-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Type-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M32 6h5a1 1 0 001-1V3a1 1 0 00-1-1h-5.343a4 4 0 00-2.828 1.172L24 8l-4.828-4.828A4 4 0 0016.343 2H11a1 1 0 00-1 1v2a1 1 0 001 1h5l6 6v18h-7a1 1 0 00-1 1v2a1 1 0 001 1h7v2l-6 6h-5a1 1 0 00-1 1v2a1 1 0 001 1h5.343a4 4 0 002.828-1.172L24 40l4.828 4.828A4 4 0 0031.657 46H37a1 1 0 001-1v-2a1 1 0 00-1-1h-5l-6-6v-2h7a1 1 0 001-1v-2a1 1 0 00-1-1h-7V12z"
        fill="currentColor"
      />
    </svg>
  `;
};
