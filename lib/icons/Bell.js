import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Bell = ({ width = 24, height = 24, hidden = false, title = 'Bell', desc } = {}) => {
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
      aria-labelledby="${`title-Bell-${count}`}"
      aria-describedby="${`title-Bell-${count}`}"
    >
      <title id="${`title-Bell-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Bell-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24 48c2.485 0 6-2.687 6-6H18c0 3.313 3.515 6 6 6zm12-32c0-5.155-2.686-7.435-8-8V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4c-5.314.565-8 2.845-8 8 0 23.123-6 16.167-6 19.23V37a1 1 0 001 1h34a1 1 0 001-1v-1.77C42 32 36 39.123 36 16z"
      />
    </svg>
  `;
};
