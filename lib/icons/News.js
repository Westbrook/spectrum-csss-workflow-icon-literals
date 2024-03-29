import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const News = ({ width = 24, height = 24, hidden = false, title = 'News', desc } = {}) => {
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
      aria-labelledby="${`title-News-${count}`}"
      aria-describedby="${`title-News-${count}`}"
    >
      <title id="${`title-News-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-News-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46 4H10a2 2 0 00-2 2v27.892a2.076 2.076 0 01-1.664 2.081A2 2 0 014 34V9a1 1 0 00-1-1H1a1 1 0 00-1 1v25a6 6 0 006 6h36a6 6 0 006-6V6a2 2 0 00-2-2zm-4 32H12V8h32v26a2 2 0 01-2 2z"
      />
      <path d="M30 28h10v4H30zm0-8h10v4H30zm0-8h10v4H30zm-14 0h10v12H16zm0 16h10v4H16z" />
    </svg>
  `;
};
