import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DistributeVerticalCenter = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Distribute Vertical Center',
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
      aria-labelledby="${`title-DistributeVerticalCenter-${count}`}"
      aria-describedby="${`title-DistributeVerticalCenter-${count}`}"
    >
      <title id="${`title-DistributeVerticalCenter-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DistributeVerticalCenter-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M14 10v2H3a1 1 0 00-1 1v2a1 1 0 001 1h11v2a2 2 0 002 2h16a2 2 0 002-2v-2h11a1 1 0 001-1v-2a1 1 0 00-1-1H34v-2a2 2 0 00-2-2H16a2 2 0 00-2 2zM8 30v2H3a1 1 0 00-1 1v2a1 1 0 001 1h5v2a2 2 0 002 2h28a2 2 0 002-2v-2h5a1 1 0 001-1v-2a1 1 0 00-1-1h-5v-2a2 2 0 00-2-2H10a2 2 0 00-2 2z"
      />
    </svg>
  `;
};
