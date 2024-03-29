import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TableSelectRow = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Table Select Row',
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
      aria-labelledby="${`title-TableSelectRow-${count}`}"
      aria-describedby="${`title-TableSelectRow-${count}`}"
    >
      <title id="${`title-TableSelectRow-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TableSelectRow-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 6v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2zm36 28v6h-8v-6zm-12 0v6h-8v-6zm-12 0v6H8v-6zm22-14v8H10v-8zm2-12v6h-8V8zM28 8v6h-8V8zM16 8v6H8V8z"
        fill="currentColor"
      />
    </svg>
  `;
};
