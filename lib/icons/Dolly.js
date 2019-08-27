import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Dolly = ({ width = 24, height = 24, hidden = false, title = 'Dolly', desc } = {}) => {
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
      aria-labelledby="${`title-Dolly-${count}`}"
      aria-describedby="${`title-Dolly-${count}`}"
    >
      <title id="${`title-Dolly-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Dolly-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M41.059 32h-9.121l-5-22h7.6a.5.5 0 00.317-.887L23.938.2 13.025 9.113a.5.5 0 00.316.887h7.6l-5 22H6.817a1 1 0 00-.62 1.785L23.938 47.8l17.741-14.015a1 1 0 00-.62-1.785z"
        fill="currentColor"
      />
    </svg>
  `;
};
