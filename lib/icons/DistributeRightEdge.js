import { tag as html } from '../custom-tag.js';
let iconCount = 0;

export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const DistributeRightEdge = ({
  width = 24,
  height = 24,
  hidden = false,
  title = 'Distribute Right Edge',
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
      aria-labelledby="${`title-DistributeRightEdge-${count}`}"
      aria-describedby="${`title-DistributeRightEdge-${count}`}"
    >
      <title id="${`title-DistributeRightEdge-${count}`}">${title}</title>
      ${desc
        ? html`
            <desc id="${`desc-DistributeRightEdge-${count}`}">${desc}</desc>
          `
        : html``}
      <path
        d="M19 2h-2a1 1 0 00-1 1v5H8a2 2 0 00-2 2v28a2 2 0 002 2h8v5a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 00-1-1zm24 0h-2a1 1 0 00-1 1v11H30a2 2 0 00-2 2v16a2 2 0 002 2h10v11a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 00-1-1z"
      />
    </svg>
  `;
};
