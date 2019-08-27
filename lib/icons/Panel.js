import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Panel = ({ width = 24, height = 24, hidden = false, title = 'Panel', desc } = {}) => {
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
      aria-labelledby="${`title-Panel-${count}`}"
      aria-describedby="${`title-Panel-${count}`}"
    >
      <title id="${`title-Panel-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Panel-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M42 2H6a2 2 0 00-2 2v42h4V34h32v12h4V4a2 2 0 00-2-2zM8 28V6h32v22z" />
      <rect height="4" rx="1" ry="1" width="24" x="12" y="38" />
      <rect height="4" rx="1" ry="1" width="24" x="12" y="10" />
      <rect height="4" rx="1" ry="1" width="24" x="12" y="18" />
    </svg>
  `;
};
