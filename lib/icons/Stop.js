import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Stop = ({ width = 24, height = 24, hidden = false, title = 'Stop', desc } = {}) => {
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
      aria-labelledby="${`title-Stop-${count}`}"
      aria-describedby="${`title-Stop-${count}`}"
    >
      <title id="${`title-Stop-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Stop-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="40" rx="2" ry="2" width="36" x="6" y="4" fill="currentColor" />
    </svg>
  `;
};
