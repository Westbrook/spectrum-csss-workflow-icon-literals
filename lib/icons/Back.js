import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Back = ({ width = 24, height = 24, hidden = false, title = 'Back', desc } = {}) => {
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
      aria-labelledby="${`title-Back-${count}`}"
      aria-describedby="${`title-Back-${count}`}"
    >
      <title id="${`title-Back-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Back-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M14 14V7.207a.5.5 0 00-.854-.354L.6 19l12.546 12.146a.5.5 0 00.854-.353V24h20v17a1 1 0 001 1h8a1 1 0 001-1V22a8 8 0 00-8-8z"
        fill="currentColor"
      />
    </svg>
  `;
};
