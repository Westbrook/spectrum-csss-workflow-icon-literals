import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const MoveLeftRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Move Left Right',
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
      aria-labelledby="${`title-MoveLeftRight-${count}`}"
      aria-describedby="${`title-MoveLeftRight-${count}`}"
    >
      <title id="${`title-MoveLeftRight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-MoveLeftRight-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M9.146 14.854a.5.5 0 01.854.353V20h6v8h-6v4.793a.5.5 0 01-.854.353L0 24zm27.708 0a.5.5 0 00-.854.353V20h-6v8h6v4.793a.5.5 0 00.854.353L46 24z"
      />
      <rect height="40" rx="1" ry="1" width="6" x="20" y="4" />
    </svg>
  `;
};
