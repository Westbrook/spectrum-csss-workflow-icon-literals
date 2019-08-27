import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ArrowUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Up',
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
      aria-labelledby="${`title-ArrowUp-${count}`}"
      aria-describedby="${`title-ArrowUp-${count}`}"
    >
      <title id="${`title-ArrowUp-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ArrowUp-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M32 22v22a2 2 0 01-2 2H18a2 2 0 01-2-2V22H7.481a1 1 0 01-.707-1.707L24 3.067l17.226 17.226A1 1 0 0140.519 22z"
        fill="currentColor"
      />
    </svg>
  `;
};
