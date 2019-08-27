import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ChevronDown = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Chevron Down',
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
      aria-labelledby="${`title-ChevronDown-${count}`}"
      aria-describedby="${`title-ChevronDown-${count}`}"
    >
      <title id="${`title-ChevronDown-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ChevronDown-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M22.585 31.7L11.94 21.05a2 2 0 010-2.828l.282-.282a2.006 2.006 0 012.828 0L24 26.888l8.949-8.948a2.006 2.006 0 012.828 0l.282.282a2 2 0 010 2.828L25.414 31.7a2 2 0 01-2.829 0z"
        fill="currentColor"
      />
    </svg>
  `;
};
