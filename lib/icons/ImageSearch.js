import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ImageSearch = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Image Search',
  desc,
} = {}) => {
  const count = iconCount++;
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="${width}"
      height="${height}"
      viewBox="0 0 48 48"
      aria-hidden="${hidden ? 'true' : 'false'}"
      role="img"
      fill="currentColor"
      aria-labelledby="${`title-ImageSearch-${count}`}"
      aria-describedby="${`title-ImageSearch-${count}`}"
    >
      <title id="${`title-ImageSearch-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ImageSearch-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M33.123 7.425a3.7 3.7 0 11-3.7 3.7 3.7 3.7 0 013.7-3.7zM21.22 21.585l-5.92-5.92a2.638 2.638 0 00-3.73 0L4 23.23V4h36v15.328a15.052 15.052 0 014 3.7V2a2 2 0 00-2-2H2a2 2 0 00-2 2v32a2 2 0 002 2h15.557a14.888 14.888 0 013.663-14.414zm25.73 22.537a2 2 0 01-2.828 2.828l-5.89-5.89a11.008 11.008 0 112.828-2.828zM32 39a7 7 0 10-7-7 7 7 0 007 7z"
        fill="currentColor"
      />
    </svg>
  `;
};
