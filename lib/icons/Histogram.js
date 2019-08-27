import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Histogram = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Histogram',
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
      aria-labelledby="${`title-Histogram-${count}`}"
      aria-describedby="${`title-Histogram-${count}`}"
    >
      <title id="${`title-Histogram-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Histogram-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="10" rx="1" ry="1" width="4" x="4" y="30" />
      <rect height="20" rx="1" ry="1" width="4" x="10" y="20" />
      <rect height="34" rx="1" ry="1" width="4" x="16" y="6" />
      <rect height="24" rx="1" ry="1" width="4" x="22" y="16" />
      <rect height="18" rx="1" ry="1" width="4" x="28" y="22" />
      <rect height="26" rx="1" ry="1" width="4" x="34" y="14" />
      <rect height="8" rx="1" ry="1" width="4" x="40" y="32" />
    </svg>
  `;
};
