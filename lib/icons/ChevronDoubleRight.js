import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChevronDoubleRight = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevron Double Right',
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
      aria-labelledby="${`title-ChevronDoubleRight-${count}`}"
      aria-describedby="${`title-ChevronDoubleRight-${count}`}"
    >
      <title id="${`title-ChevronDoubleRight-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ChevronDoubleRight-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M39.7 25.414L29.05 36.059a2 2 0 01-2.828 0l-.282-.282a2.006 2.006 0 010-2.828L34.888 24l-8.948-8.949a2.006 2.006 0 010-2.828l.282-.282a2 2 0 012.828 0L39.7 22.585a2 2 0 010 2.829zm-16 0L13.05 36.059a2 2 0 01-2.828 0l-.282-.282a2.006 2.006 0 010-2.828L18.888 24l-8.949-8.949a2.006 2.006 0 010-2.828l.282-.282a2 2 0 012.828 0L23.7 22.585a2 2 0 010 2.829z"
      />
    </svg>
  `;
};
