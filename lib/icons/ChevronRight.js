import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChevronRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevron Right',
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
      aria-labelledby="${`title-ChevronRight-${count}`}"
      aria-describedby="${`title-ChevronRight-${count}`}"
    >
      <title id="${`title-ChevronRight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ChevronRight-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M31.7 25.414L21.05 36.059a2 2 0 01-2.828 0l-.282-.282a2.006 2.006 0 010-2.828L26.888 24l-8.948-8.949a2.006 2.006 0 010-2.828l.282-.282a2 2 0 012.828 0L31.7 22.585a2 2 0 010 2.829z"
        fill="currentColor"
      />
    </svg>
  `;
};
