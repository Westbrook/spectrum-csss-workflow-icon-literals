import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileCode = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Code',
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
      aria-labelledby="${`title-FileCode-${count}`}"
      aria-describedby="${`title-FileCode-${count}`}"
    >
      <title id="${`title-FileCode-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileCode-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 4v12h12L28 4z" />
      <path
        d="M26 20a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h28a2 2 0 002-2V20zm-6.256 17.219a1 1 0 01-.814 1.58h-2.012a1 1 0 01-.8-.4L12.068 33l4.049-5.4a1 1 0 01.8-.4h2.013a1 1 0 01.814 1.58L16.738 33zm9-12.742l-4.847 16.8a1 1 0 01-.961.723h-1.6a1 1 0 01-.961-1.277l4.847-16.8a1 1 0 01.961-.723h1.6a1 1 0 01.958 1.277zM33.2 38.4a1 1 0 01-.8.4h-2.012a1 1 0 01-.814-1.58L32.58 33l-3.007-4.219a1 1 0 01.814-1.58H32.4a1 1 0 01.8.4L37.25 33z"
      />
    </svg>
  `;
};
