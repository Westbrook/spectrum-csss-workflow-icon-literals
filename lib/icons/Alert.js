import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Alert = ({ width = 24, height = 24, hidden = false, title = 'Alert', desc } = {}) => {
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
      aria-labelledby="${`title-Alert-${count}`}"
      aria-describedby="${`title-Alert-${count}`}"
    >
      <title id="${`title-Alert-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Alert-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44.37 39.036L25.752 5.186a2 2 0 00-3.5 0L3.63 39.036A2 2 0 005.383 42h37.234a2 2 0 001.753-2.964zM24 39a3 3 0 113-3 3 3 0 01-3 3zm-2.4-10V15a1 1 0 011-1h2.8a1 1 0 011 1v14a1 1 0 01-1 1h-2.8a1 1 0 01-1-1z"
        fill="currentColor"
      />
    </svg>
  `;
};
