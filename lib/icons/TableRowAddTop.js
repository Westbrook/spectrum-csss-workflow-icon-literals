import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TableRowAddTop = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Table Row Add Top',
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
      aria-labelledby="${`title-TableRowAddTop-${count}`}"
      aria-describedby="${`title-TableRowAddTop-${count}`}"
    >
      <title id="${`title-TableRowAddTop-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TableRowAddTop-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M36 23.9A11.9 11.9 0 1024.1 12 11.9 11.9 0 0036 23.9zm-8-13.4a.5.5 0 01.5-.5H34V4.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V10h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-5.5a.5.5 0 01-.5-.5z"
      />
      <path
        d="M22.275 4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V25.725a15.809 15.809 0 01-4 1.648V28h-8v-.627a15.809 15.809 0 01-4-1.648V28h-8v-8h2.275a15.8 15.8 0 010-16zM32 32h8v8h-8zm-12 0h8v8h-8zm-4-4H8v-8h8zm0 12H8v-8h8z"
      />
    </svg>
  `;
};
