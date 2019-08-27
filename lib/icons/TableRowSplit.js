import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TableRowSplit = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Table Row Split',
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
      aria-labelledby="${`title-TableRowSplit-${count}`}"
      aria-describedby="${`title-TableRowSplit-${count}`}"
    >
      <title id="${`title-TableRowSplit-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TableRowSplit-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2zM20 20h8v8h-8zm-4 20H8v-8h8zm0-12H8v-8h8zm0-12H8V8h8zm24 24H20v-8h20zm0-12h-8v-8h8zm0-12H20V8h20z"
        fill="currentColor"
      />
    </svg>
  `;
};
