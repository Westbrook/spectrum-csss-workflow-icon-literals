import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ArrowRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Right',
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
      aria-labelledby="${`title-ArrowRight-${count}`}"
      aria-describedby="${`title-ArrowRight-${count}`}"
    >
      <title id="${`title-ArrowRight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ArrowRight-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M26 16H4a2 2 0 00-2 2v12a2 2 0 002 2h22v8.519a1 1 0 001.707.707L44.933 24 27.707 6.774A1 1 0 0026 7.481z"
        fill="currentColor"
      />
    </svg>
  `;
};
