import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Seat = ({ width = 24, height = 24, hidden = false, title = 'Seat', desc } = {}) => {
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
      aria-labelledby="${`title-Seat-${count}`}"
      aria-describedby="${`title-Seat-${count}`}"
    >
      <title id="${`title-Seat-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Seat-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="12" rx="2" ry="2" width="28" x="10" y="30" />
      <path
        d="M29.906 4H18.094A8.094 8.094 0 0010 12.094V24a2 2 0 002 2h24a2 2 0 002-2V12.094A8.094 8.094 0 0029.906 4zM4 20a4 4 0 00-4 4v20a2 2 0 002 2h2a2 2 0 002-2V22a2 2 0 00-2-2zm40 0a4 4 0 014 4v20a2 2 0 01-2 2h-2a2 2 0 01-2-2V22a2 2 0 012-2z"
      />
    </svg>
  `;
};
