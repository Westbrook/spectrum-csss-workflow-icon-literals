import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Watch = ({ width = 24, height = 24, hidden = false, title = 'Watch', desc } = {}) => {
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
      aria-labelledby="${`title-Watch-${count}`}"
      aria-describedby="${`title-Watch-${count}`}"
    >
      <title id="${`title-Watch-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Watch-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M10 8a1.914 1.914 0 00-2 2v26a2.02 2.02 0 002 2 2.112 2.112 0 012 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2.112 2.112 0 012-2 2.021 2.021 0 002-2V22a2 2 0 002-2v-2a2 2 0 00-2-2v-6a1.987 1.987 0 00-2.083-2A1.947 1.947 0 0134 6V2a2 2 0 00-2-2H14a2 2 0 00-2 2v4a1.875 1.875 0 01-2 2zm24 4v22H12V12z"
        fill="currentColor"
      />
    </svg>
  `;
};
