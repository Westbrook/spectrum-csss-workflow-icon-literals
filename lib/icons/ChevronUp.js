import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChevronUp = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevron Up',
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
      aria-labelledby="${`title-ChevronUp-${count}`}"
      aria-describedby="${`title-ChevronUp-${count}`}"
    >
      <title id="${`title-ChevronUp-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ChevronUp-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M25.414 16.3l10.645 10.65a2 2 0 010 2.828l-.282.282a2.006 2.006 0 01-2.828 0L24 21.112l-8.95 8.948a2.006 2.006 0 01-2.828 0l-.282-.282a2 2 0 010-2.828L22.585 16.3a2 2 0 012.829 0z"
        fill="currentColor"
      />
    </svg>
  `;
};
