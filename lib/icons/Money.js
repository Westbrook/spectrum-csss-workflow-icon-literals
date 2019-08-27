import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Money = ({ width = 24, height = 24, hidden = false, title = 'Money', desc } = {}) => {
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
      aria-labelledby="${`title-Money-${count}`}"
      aria-describedby="${`title-Money-${count}`}"
    >
      <title id="${`title-Money-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Money-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M4 16H2a2 2 0 00-2 2v22a2 2 0 002 2h36a2 2 0 002-2v-2H4z" />
      <path d="M10 10H8a2 2 0 00-2 2v22a2 2 0 002 2h34a2 2 0 002-2v-2H10z" />
      <path
        d="M45.789 6H14.211A2.211 2.211 0 0012 8.211v19.578A2.211 2.211 0 0014.211 30h31.578A2.211 2.211 0 0048 27.789V8.211A2.211 2.211 0 0045.789 6zM20 26a4 4 0 00-4-4v-8a4 4 0 004-4h20a4 4 0 004 4v8a4 4 0 00-4 4z"
      />
      <circle cx="30" cy="18" r="6" />
    </svg>
  `;
};
