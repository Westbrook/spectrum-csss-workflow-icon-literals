import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const ViewList = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'View List',
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
      aria-labelledby="${`title-ViewList-${count}`}"
      aria-describedby="${`title-ViewList-${count}`}"
    >
      <title id="${`title-ViewList-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-ViewList-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="10" rx="2" ry="2" width="10" x="4" y="6" />
      <rect height="10" rx="2" ry="2" width="10" x="4" y="20" />
      <rect height="10" rx="2" ry="2" width="10" x="4" y="34" />
      <rect height="6" rx="1" ry="1" width="24" x="18" y="8" />
      <rect height="6" rx="1" ry="1" width="24" x="18" y="22" />
      <rect height="6" rx="1" ry="1" width="24" x="18" y="36" />
    </svg>
  `;
};
