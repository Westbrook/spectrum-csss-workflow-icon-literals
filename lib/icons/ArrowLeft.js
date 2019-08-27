import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ArrowLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Left',
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
      aria-labelledby="${`title-ArrowLeft-${count}`}"
      aria-describedby="${`title-ArrowLeft-${count}`}"
    >
      <title id="${`title-ArrowLeft-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ArrowLeft-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M22 16h22a2 2 0 012 2v12a2 2 0 01-2 2H22v8.519a1 1 0 01-1.707.707L3.066 24 20.292 6.774A1 1 0 0122 7.481z"
        fill="currentColor"
      />
    </svg>
  `;
};
