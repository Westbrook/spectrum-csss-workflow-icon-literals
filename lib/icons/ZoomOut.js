import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ZoomOut = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Zoom Out',
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
      aria-labelledby="${`title-ZoomOut-${count}`}"
      aria-describedby="${`title-ZoomOut-${count}`}"
    >
      <title id="${`title-ZoomOut-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ZoomOut-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="4" rx="1" ry="1" width="16" x="12" y="18" />
      <path
        d="M43.338 40.3L32.719 29.679a16.043 16.043 0 10-3.04 3.04L40.3 43.338a2.155 2.155 0 003.04-3.04zM20 32a12 12 0 1112-12 12 12 0 01-12 12z"
      />
    </svg>
  `;
};
