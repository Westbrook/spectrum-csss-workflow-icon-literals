import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileEmail = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Email',
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
      aria-labelledby="${`title-FileEmail-${count}`}"
      aria-describedby="${`title-FileEmail-${count}`}"
    >
      <title id="${`title-FileEmail-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileEmail-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M28 4v12h12L28 4z" />
      <path d="M24 32a2 2 0 012-2h14V20H26a2 2 0 01-2-2V4H10a2 2 0 00-2 2v36a2 2 0 002 2h14z" />
      <path
        d="M39.343 43.834L48 37.538v9.351A1.111 1.111 0 0146.889 48H29.111A1.111 1.111 0 0128 46.889v-9.351l8.657 6.3a2.283 2.283 0 002.686-.004zM38 41.052L48 34H28z"
      />
    </svg>
  `;
};
