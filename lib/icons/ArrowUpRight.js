import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ArrowUpRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Arrow Up Right',
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
      aria-labelledby="${`title-ArrowUpRight-${count}`}"
      aria-describedby="${`title-ArrowUpRight-${count}`}"
    >
      <title id="${`title-ArrowUpRight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ArrowUpRight-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M34.269 25.045L16.713 42.6a2 2 0 01-2.828 0L5.4 34.116a2 2 0 010-2.828l17.555-17.557-6.024-6.024A1 1 0 0117.638 6H42v24.362a1 1 0 01-1.707.707z"
        fill="currentColor"
      />
    </svg>
  `;
};
