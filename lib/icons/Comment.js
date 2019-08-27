import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const Comment = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Comment',
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
      aria-labelledby="${`title-Comment-${count}`}"
      aria-describedby="${`title-Comment-${count}`}"
    >
      <title id="${`title-Comment-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-Comment-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M4 12v18a6 6 0 006 6h2v9.586a1 1 0 001.707.707L24 36l13.993-.007a6 6 0 006.007-6V12a6 6 0 00-6-6H10a6 6 0 00-6 6z"
        fill="currentColor"
      />
    </svg>
  `;
};
