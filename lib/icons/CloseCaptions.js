import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const CloseCaptions = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Close Captions',
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
      aria-labelledby="${`title-CloseCaptions-${count}`}"
      aria-describedby="${`title-CloseCaptions-${count}`}"
    >
      <title id="${`title-CloseCaptions-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-CloseCaptions-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 8H6a6 6 0 00-6 6v20a6 6 0 006 6h36a6 6 0 006-6V14a6 6 0 00-6-6zM22.217 18.149a1.082 1.082 0 01-.492.954l-.432.266-.611-.243a7.928 7.928 0 00-3.123-.5 4.961 4.961 0 00-5.36 5.335c0 5.129 4.51 5.389 5.415 5.389a8.766 8.766 0 003.037-.41l.412-.145.509.218a1.049 1.049 0 01.481.921v2.417a1.245 1.245 0 01-.76 1.2 12.83 12.83 0 01-4.086.555C11 34.1 6.984 30.152 6.984 24.041c0-6.066 4.273-10.141 10.63-10.141a10.114 10.114 0 013.9.538 1.212 1.212 0 01.707 1.132zm18 0a1.082 1.082 0 01-.492.954l-.432.266-.611-.243a7.928 7.928 0 00-3.123-.5 4.961 4.961 0 00-5.36 5.335c0 5.129 4.51 5.389 5.415 5.389a8.766 8.766 0 003.037-.41l.412-.145.509.218a1.049 1.049 0 01.481.921v2.417a1.245 1.245 0 01-.76 1.2 12.83 12.83 0 01-4.086.555c-6.21 0-10.223-3.948-10.223-10.059 0-6.066 4.273-10.141 10.63-10.141a10.114 10.114 0 013.9.538 1.212 1.212 0 01.707 1.132z"
        fill="currentColor"
      />
    </svg>
  `;
};
