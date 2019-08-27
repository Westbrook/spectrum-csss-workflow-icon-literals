import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Apps = ({ width = 24, height = 24, hidden = false, title = 'Apps', desc } = {}) => {
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
      aria-labelledby="${`title-Apps-${count}`}"
      aria-describedby="${`title-Apps-${count}`}"
    >
      <title id="${`title-Apps-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Apps-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="8" rx="2" ry="2" width="8" x="6" y="6" />
      <rect height="8" rx="2" ry="2" width="8" x="20" y="6" />
      <rect height="8" rx="2" ry="2" width="8" x="34" y="6" />
      <rect height="8" rx="2" ry="2" width="8" x="6" y="20" />
      <rect height="8" rx="2" ry="2" width="8" x="20" y="20" />
      <rect height="8" rx="2" ry="2" width="8" x="34" y="20" />
      <rect height="8" rx="2" ry="2" width="8" x="6" y="34" />
      <rect height="8" rx="2" ry="2" width="8" x="20" y="34" />
      <rect height="8" rx="2" ry="2" width="8" x="34" y="34" />
    </svg>
  `;
};
