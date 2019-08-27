import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChevronDoubleLeft = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevron Double Left',
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
      aria-labelledby="${`title-ChevronDoubleLeft-${count}`}"
      aria-describedby="${`title-ChevronDoubleLeft-${count}`}"
    >
      <title id="${`title-ChevronDoubleLeft-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ChevronDoubleLeft-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M8.3 22.585L18.949 11.94a2 2 0 012.828 0l.282.282a2.006 2.006 0 010 2.828L13.112 24l8.948 8.949a2.006 2.006 0 010 2.828l-.282.282a2 2 0 01-2.828 0L8.3 25.414a2 2 0 010-2.829zm16 0L34.949 11.94a2 2 0 012.828 0l.282.282a2.006 2.006 0 010 2.828L29.112 24l8.948 8.949a2.006 2.006 0 010 2.828l-.282.282a2 2 0 01-2.828 0L24.3 25.414a2 2 0 010-2.829z"
      />
    </svg>
  `;
};
