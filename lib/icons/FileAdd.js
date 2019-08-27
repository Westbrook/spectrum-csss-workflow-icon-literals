import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileAdd = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Add',
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
      aria-labelledby="${`title-FileAdd-${count}`}"
      aria-describedby="${`title-FileAdd-${count}`}"
    >
      <title id="${`title-FileAdd-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileAdd-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M20 4v12H8L20 4z" />
      <path
        d="M20.1 36A15.845 15.845 0 0140 20.628V6a2 2 0 00-2-2H24v14a2 2 0 01-2 2H8v22a2 2 0 002 2h12.275a15.8 15.8 0 01-2.175-8z"
      />
      <path
        d="M36 24.1A11.9 11.9 0 1047.9 36 11.9 11.9 0 0036 24.1zm8 13.4a.5.5 0 01-.5.5H38v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V38h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H34v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V34h5.5a.5.5 0 01.5.5z"
      />
    </svg>
  `;
};
