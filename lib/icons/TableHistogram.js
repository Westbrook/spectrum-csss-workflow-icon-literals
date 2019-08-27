import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TableHistogram = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Table Histogram',
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
      aria-labelledby="${`title-TableHistogram-${count}`}"
      aria-describedby="${`title-TableHistogram-${count}`}"
    >
      <title id="${`title-TableHistogram-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TableHistogram-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2zM16 40H8v-4h8zm0-8H8v-4h8zm0-8H8v-4h8zm16 16H20v-4h12zm8-8H20v-4h20zm-4-8H20v-4h16zm4-8H8V8h32z"
        fill="currentColor"
      />
    </svg>
  `;
};
