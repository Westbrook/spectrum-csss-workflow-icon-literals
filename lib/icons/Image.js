import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Image = ({ width = 24, height = 24, hidden = false, title = 'Image', desc } = {}) => {
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
      aria-labelledby="${`title-Image-${count}`}"
      aria-describedby="${`title-Image-${count}`}"
    >
      <title id="${`title-Image-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Image-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M44 6H4a2 2 0 00-2 2v32a2 2 0 002 2h40a2 2 0 002-2V8a2 2 0 00-2-2zm-2 28.534l-6.954-6.954a2.639 2.639 0 00-3.731 0l-4.051 4.051-9.964-9.967a2.638 2.638 0 00-3.73 0L6 29.231V10h36z"
      />
      <path d="M35.123 20.825a3.7 3.7 0 10-3.7-3.7 3.7 3.7 0 003.7 3.7z" />
    </svg>
  `;
};
