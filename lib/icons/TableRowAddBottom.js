import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TableRowAddBottom = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Table Row Add Bottom',
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
      aria-labelledby="${`title-TableRowAddBottom-${count}`}"
      aria-describedby="${`title-TableRowAddBottom-${count}`}"
    >
      <title id="${`title-TableRowAddBottom-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TableRowAddBottom-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24.1 36A11.9 11.9 0 1036 24.1 11.9 11.9 0 0024.1 36zm3.9-1.5a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5z"
      />
      <path
        d="M20.1 36a15.806 15.806 0 012.175-8H20v-8h8v2.275a15.809 15.809 0 014-1.648V20h8v.627a15.809 15.809 0 014 1.648V6a2 2 0 00-2-2H6a2 2 0 00-2 2v36a2 2 0 002 2h16.275a15.806 15.806 0 01-2.175-8zM32 8h8v8h-8zM20 8h8v8h-8zm-4 20H8v-8h8zm0-12H8V8h8z"
      />
    </svg>
  `;
};
