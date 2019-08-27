import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DistributeSpaceHoriz = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Distribute Space Horiz',
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
      aria-labelledby="${`title-DistributeSpaceHoriz-${count}`}"
      aria-describedby="${`title-DistributeSpaceHoriz-${count}`}"
    >
      <title id="${`title-DistributeSpaceHoriz-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DistributeSpaceHoriz-${count}`}">${desc}</desc>
          `
        : html``}
      <rect height="30" rx="2" ry="2" width="14" x="6" y="14" />
      <rect height="20" rx="2" ry="2" width="16" x="28" y="16" />
      <path
        d="M35 2h-3V1a1 1 0 00-1-1h-2a1 1 0 00-1 1v1h-8V1a1 1 0 00-1-1h-2a1 1 0 00-1 1v1h-3a1 1 0 00-1 1v2a1 1 0 001 1h3v5a1 1 0 001 1h2a1 1 0 001-1V6h8v5a1 1 0 001 1h2a1 1 0 001-1V6h3a1 1 0 001-1V3a1 1 0 00-1-1z"
      />
    </svg>
  `;
};
