import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TableSelectColumn = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Table Select Column',
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
      aria-labelledby="${`title-TableSelectColumn-${count}`}"
      aria-describedby="${`title-TableSelectColumn-${count}`}"
    >
      <title id="${`title-TableSelectColumn-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TableSelectColumn-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M42 4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2zM14 40H8v-8h6zm0-12H8v-8h6zm0-12H8V8h6zm14 22h-8V10h8zm12 2h-6v-8h6zm0-12h-6v-8h6zm0-12h-6V8h6z"
        fill="currentColor"
      />
    </svg>
  `;
};
