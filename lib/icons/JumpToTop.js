import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const JumpToTop = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Jump To Top',
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
      aria-labelledby="${`title-JumpToTop-${count}`}"
      aria-describedby="${`title-JumpToTop-${count}`}"
    >
      <title id="${`title-JumpToTop-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-JumpToTop-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M30 30v12a2 2 0 01-2 2h-8a2 2 0 01-2-2V30H9.481a1 1 0 01-.707-1.707L24 12.8l15.226 15.493A1 1 0 0138.519 30z"
      />
      <rect height="4" rx=".5" ry=".5" width="48" y="4" />
    </svg>
  `;
};
