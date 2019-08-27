import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Print = ({ width = 24, height = 24, hidden = false, title = 'Print', desc } = {}) => {
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
      aria-labelledby="${`title-Print-${count}`}"
      aria-describedby="${`title-Print-${count}`}"
    >
      <title id="${`title-Print-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Print-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M14 34h20v2H14zm0-4h20v2H14z" />
      <path
        d="M44 14h-6V6a2 2 0 00-2-2H12a2 2 0 00-2 2v8H4a2 2 0 00-2 2v16a2 2 0 002 2h2v8a2 2 0 002 2h32a2 2 0 002-2v-8h2a2 2 0 002-2V16a2 2 0 00-2-2zM14 8h20v6H14zm24 32H10V28h28z"
      />
    </svg>
  `;
};
