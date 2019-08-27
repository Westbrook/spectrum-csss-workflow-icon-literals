import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Pivot = ({ width = 24, height = 24, hidden = false, title = 'Pivot', desc } = {}) => {
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
      aria-labelledby="${`title-Pivot-${count}`}"
      aria-describedby="${`title-Pivot-${count}`}"
    >
      <title id="${`title-Pivot-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Pivot-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M46.793 34H40V16a8 8 0 00-8-8H14V1.207a.5.5 0 00-.854-.353L.6 13l12.546 12.146a.5.5 0 00.854-.353V18h16v16h-6.793a.5.5 0 00-.353.854L35 47.4l12.146-12.546a.5.5 0 00-.353-.854z"
        fill="currentColor"
      />
    </svg>
  `;
};
