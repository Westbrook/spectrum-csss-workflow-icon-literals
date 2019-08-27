import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const FileData = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'File Data',
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
      aria-labelledby="${`title-FileData-${count}`}"
      aria-describedby="${`title-FileData-${count}`}"
    >
      <title id="${`title-FileData-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-FileData-${count}`}">${desc}</desc>
          `
        : html``}
      <path d="M20 4v12H8L20 4z" />
      <path
        d="M24 26c0-4.676 5.736-8 14-8q1.028 0 2 .064V6a2 2 0 00-2-2H24v14a2 2 0 01-2 2H8v22a2 2 0 002 2h14z"
      />
      <path
        d="M38 22c5.421 0 9.817 1.708 9.817 3.817s-4.4 3.817-9.817 3.817-9.817-1.708-9.817-3.817S32.579 22 38 22zm9.717 8c-1.263 2-4.771 3-9.717 3s-8.454-1-9.721-3H28v4.454C28 36.092 32.579 38 38 38s10-1.908 10-3.546V30zm0 8c-1.263 2-4.771 3-9.717 3s-8.454-1-9.721-3H28v6.454C28 46.092 32.579 48 38 48s10-1.908 10-3.546V38z"
      />
    </svg>
  `;
};
