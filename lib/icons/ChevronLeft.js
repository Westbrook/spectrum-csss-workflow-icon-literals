import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChevronLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevron Left',
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
      aria-labelledby="${`title-ChevronLeft-${count}`}"
      aria-describedby="${`title-ChevronLeft-${count}`}"
    >
      <title id="${`title-ChevronLeft-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ChevronLeft-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M16.3 22.585L26.949 11.94a2 2 0 012.828 0l.282.282a2.006 2.006 0 010 2.828L21.112 24l8.948 8.949a2.006 2.006 0 010 2.828l-.282.282a2 2 0 01-2.828 0L16.3 25.414a2 2 0 010-2.829z"
        fill="currentColor"
      />
    </svg>
  `;
};
