import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Copy = ({ width = 24, height = 24, hidden = false, title = 'Copy', desc } = {}) => {
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
      aria-labelledby="${`title-Copy-${count}`}"
      aria-describedby="${`title-Copy-${count}`}"
    >
      <title id="${`title-Copy-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Copy-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M14 30V14H4a2 2 0 00-2 2v26a2 2 0 002 2h26a2 2 0 002-2V32H16a2 2 0 01-2-2z" />
      <rect height="4" rx="1" ry="1" width="4" x="18" y="24" />
      <rect height="4" rx="1" ry="1" width="4" x="26" y="24" />
      <rect height="4" rx="1" ry="1" width="4" x="34" y="24" />
      <rect height="4" rx="1" ry="1" width="4" x="42" y="24" />
      <rect height="4" rx="1" ry="1" width="4" x="42" y="16" />
      <rect height="4" rx="1" ry="1" width="4" x="42" y="8" />
      <rect height="4" rx="1" ry="1" width="4" x="42" />
      <rect height="4" rx="1" ry="1" width="4" x="34" />
      <rect height="4" rx="1" ry="1" width="4" x="26" />
      <rect height="4" rx="1" ry="1" width="4" x="18" />
      <rect height="4" rx="1" ry="1" width="4" x="18" y="8" />
      <rect height="4" rx="1" ry="1" width="4" x="18" y="16" />
    </svg>
  `;
};
