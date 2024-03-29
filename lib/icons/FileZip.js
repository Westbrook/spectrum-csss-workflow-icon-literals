import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileZip = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Zip',
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
      aria-labelledby="${`title-FileZip-${count}`}"
      aria-describedby="${`title-FileZip-${count}`}"
    >
      <title id="${`title-FileZip-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileZip-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 4v12h12L28 4z" />
      <circle cx="17.814" cy="32.472" r="3.211" />
      <path
        d="M26 20a2 2 0 01-2-2V4h-4v18a2 2 0 01-4 0V4h-6a2 2 0 00-2 2v36a2 2 0 002 2h6v-2a2 2 0 014 0v2h18a2 2 0 002-2V20zm-2 16a2 2 0 01-2 2h-8a2 2 0 01-2-2V23a1 1 0 011-1h1v2a2 2 0 002 2h4a2 2 0 002-2v-2h1a1 1 0 011 1z"
      />
    </svg>
  `;
};
