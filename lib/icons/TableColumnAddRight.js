import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TableColumnAddRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Table Column Add Right',
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
      aria-labelledby="${`title-TableColumnAddRight-${count}`}"
      aria-describedby="${`title-TableColumnAddRight-${count}`}"
    >
      <title id="${`title-TableColumnAddRight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TableColumnAddRight-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M24.1 36A11.9 11.9 0 1036 24.1 11.9 11.9 0 0024.1 36zm3.9-1.5a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5z"
      />
      <path
        d="M4 6v36a2 2 0 002 2h16.275a15.809 15.809 0 01-1.648-4H20v-8h.627a15.809 15.809 0 011.648-4H20v-8h8v2.275a15.8 15.8 0 0116 0V6a2 2 0 00-2-2H6a2 2 0 00-2 2zm16 2h8v8h-8zM8 32h8v8H8zm0-12h8v8H8zM8 8h8v8H8z"
      />
    </svg>
  `;
};
