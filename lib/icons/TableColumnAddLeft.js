import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const TableColumnAddLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Table Column Add Left',
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
      aria-labelledby="${`title-TableColumnAddLeft-${count}`}"
      aria-describedby="${`title-TableColumnAddLeft-${count}`}"
    >
      <title id="${`title-TableColumnAddLeft-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-TableColumnAddLeft-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M12 24.1A11.9 11.9 0 1023.9 36 11.9 11.9 0 0012 24.1zm8 13.4a.5.5 0 01-.5.5H14v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38H4.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H10v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5z"
      />
      <path
        d="M42 4H6a2 2 0 00-2 2v16.275a15.8 15.8 0 0116 0V20h8v8h-2.275a15.809 15.809 0 011.648 4H28v8h-.627a15.809 15.809 0 01-1.648 4H42a2 2 0 002-2V6a2 2 0 00-2-2zM28 16h-8V8h8zm12 24h-8v-8h8zm0-12h-8v-8h8zm0-12h-8V8h8z"
      />
    </svg>
  `;
};
