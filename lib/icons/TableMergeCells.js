import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TableMergeCells = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Table Merge Cells',
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
      aria-labelledby="${`title-TableMergeCells-${count}`}"
      aria-describedby="${`title-TableMergeCells-${count}`}"
    >
      <title id="${`title-TableMergeCells-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TableMergeCells-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2zM16 40H8v-8h8zm0-12H8v-8h8zm0-12H8V8h8zm12 24h-8v-8h8zm12 0h-8v-8h8z"
        fill="currentColor"
      />
    </svg>
  `;
};
