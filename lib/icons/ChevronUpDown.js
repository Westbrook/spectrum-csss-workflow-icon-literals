import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChevronUpDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevron Up Down',
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
      aria-labelledby="${`title-ChevronUpDown-${count}`}"
      aria-describedby="${`title-ChevronUpDown-${count}`}"
    >
      <title id="${`title-ChevronUpDown-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ChevronUpDown-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M22.585 41.7L11.94 31.05a2 2 0 010-2.828l.282-.282a2.006 2.006 0 012.828 0L24 36.888l8.949-8.948a2.006 2.006 0 012.828 0l.282.282a2 2 0 010 2.828L25.414 41.7a2 2 0 01-2.829 0zm2.829-35.4l10.645 10.65a2 2 0 010 2.828l-.282.282a2.006 2.006 0 01-2.828 0L24 11.112l-8.95 8.948a2.006 2.006 0 01-2.828 0l-.282-.282a2 2 0 010-2.828L22.585 6.3a2 2 0 012.829 0z"
      />
    </svg>
  `;
};
