import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TableAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Table Add',
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
      aria-labelledby="${`title-TableAdd-${count}`}"
      aria-describedby="${`title-TableAdd-${count}`}"
    >
      <title id="${`title-TableAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TableAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M20.728 40H20V28h2.375a15.95 15.95 0 013.314-4H20v-4h20v.6a15.824 15.824 0 014 1.612V6a2 2 0 00-2-2H6a2 2 0 00-2 2v36a2 2 0 002 2h16.375a15.8 15.8 0 01-1.647-4zM8 8h32v8H8zm8 32H8v-4h8zm0-8H8v-4h8zm0-8H8v-4h8z"
      />
      <path
        d="M36.1 24.1A11.9 11.9 0 1048 36a11.9 11.9 0 00-11.9-11.9zm8 13.4a.5.5 0 01-.5.5h-5.5v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5.5v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5z"
      />
    </svg>
  `;
};
