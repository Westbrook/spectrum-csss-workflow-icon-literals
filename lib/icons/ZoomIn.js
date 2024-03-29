import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ZoomIn = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Zoom In',
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
      aria-labelledby="${`title-ZoomIn-${count}`}"
      aria-describedby="${`title-ZoomIn-${count}`}"
    >
      <title id="${`title-ZoomIn-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ZoomIn-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M27 18h-5v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5h-5a1 1 0 00-1 1v2a1 1 0 001 1h5v5a1 1 0 001 1h2a1 1 0 001-1v-5h5a1 1 0 001-1v-2a1 1 0 00-1-1z"
      />
      <path
        d="M43.338 40.3L32.719 29.679a16.043 16.043 0 10-3.04 3.04L40.3 43.338a2.155 2.155 0 003.04-3.04zM20 32a12 12 0 1112-12 12 12 0 01-12 12z"
      />
    </svg>
  `;
};
