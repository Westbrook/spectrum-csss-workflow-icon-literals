import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Pause = ({ width = 24, height = 24, hidden = false, title = 'Pause', desc } = {}) => {
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
      aria-labelledby="${`title-Pause-${count}`}"
      aria-describedby="${`title-Pause-${count}`}"
    >
      <title id="${`title-Pause-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Pause-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="40" rx="2" ry="2" width="12" x="8" y="4" />
      <rect height="40" rx="2" ry="2" width="12" x="28" y="4" />
    </svg>
  `;
};
