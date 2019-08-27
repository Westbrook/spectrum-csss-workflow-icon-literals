import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ArrowDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Down',
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
      aria-labelledby="${`title-ArrowDown-${count}`}"
      aria-describedby="${`title-ArrowDown-${count}`}"
    >
      <title id="${`title-ArrowDown-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ArrowDown-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M32 26V4a2 2 0 00-2-2H18a2 2 0 00-2 2v22H7.48a1 1 0 00-.707 1.707L24 44.933l17.226-17.226A1 1 0 0040.519 26z"
        fill="currentColor"
      />
    </svg>
  `;
};
