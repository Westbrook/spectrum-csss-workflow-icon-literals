import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const AdPrint = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Ad Print',
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
      aria-labelledby="${`title-AdPrint-${count}`}"
      aria-describedby="${`title-AdPrint-${count}`}"
    >
      <title id="${`title-AdPrint-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-AdPrint-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M47 4H9a1 1 0 00-1 1v29a2 2 0 01-4 0V9a1 1 0 00-1-1H1a1 1 0 00-1 1v25a6 6 0 006 6h36a6 6 0 006-6V5a1 1 0 00-1-1zm-5 32H12V8h32v26a2 2 0 01-2 2z"
      />
      <path d="M30 12h10v20H30z" />
    </svg>
  `;
};
